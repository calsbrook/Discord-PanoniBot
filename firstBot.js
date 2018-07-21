const Discord = require('discord.js');
const fs = require('fs');
// const ttt = require('./ticTacToe')
// var ping = require('./ping');
var auth = require('./auth.json')

const client = new Discord.Client();

client.commands = new Discord.Collection()

fs.readdir('./cmds/', (err, files) => {
	if(err) console.error(err)

	console.log(files)
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
	var emojis = {}
	var hugeList = client.emojis.array()
	console.log(client.commands)
	console.log("I am ready!");
	function addEmoji() {
		// console.log('adding emoji')
		// console.log(`this is the huge list ${hugeList[0]}`)
		for (i=0; i ++; i === hugeList.length) {
			emojis[hugeList[i].Emoji.name] = hugeList[i].Emoji.id
		}
		// console.log(emojis)
	}
	addEmoji();
});


client.on("message", async (message) => {
	let cmd = client.commands.get(command.slice(prefix.length))
	if (cmd) cmd.run(client, message, args)
	if (message.author.bot) return;
	const msg = message;

	// makes sure the command works regardless of upper or lowercase
	var input = message.content.toUpperCase();
	
	if(input === "HI") {
		message.channel.send("Hey wassup hello!");
	}

	// if(input === '!PING') {
	// 	const m = await message.channel.send("Ping?");
	// 	m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
	// }

	if(input === 'YESNO') {
		message.channel.send('test')
	}

	if(input === "TIC TAC TOE") {
		// console.log('tic tac toe started')
		// ticTacToe(msg, message.author);
	}
});
	
	
client.login(auth.token); //insert bot login token here which can be found at https://discordapp.com/developers/docs/intro
