const Discord = require('discord.js');
const fs = require('fs');
const botSettings = require('./botSettings.json')
var auth = require('./auth.json');

const client = new Discord.Client();

client.commands = new Discord.Collection()

fs.readdir('./cmds/', (err, files) => {
	if(err) console.error(err)

	if (files.length <= 0) {
		console.log('No commands to load')
	}
	console.log(`Loading ${files.length} commands`)

	files.forEach((f, i) => {
		let props = require(`./cmds/${f}`)
		console.log(`${i+1}) ${f} loaded`)
		client.commands.set(props.help.name, props)
	})
})

client.on("ready", () => {
	console.log("I am ready!");
	client.user.setActivity('!info for command help', {type: 'PLAYING'});
});


client.on("message", async (message) => {
	let messageArray = message.content.split(' ');
	let command = messageArray[0];
	let args = messageArray.slice(1)

	messageArray.forEach(function (word) {
		if (word.includes("tumblr_pdc7iaBNrE1wxh6g4o1_640.png")) {
			message.delete();
			message.channel.send(`${client.emojis.find('name', 'goToJail')}Sam stop`)
		}
	})
	
	let cmd = client.commands.get(command.slice(botSettings.prefix.length))
	if (cmd) cmd.run(client, message, args)
	if (message.author.bot) return;
	if (!command.startsWith(botSettings.prefix)) return;
});
	
	
client.login(auth.token); //insert bot login token here which can be found at https://discordapp.com/developers/docs/intro
