const agree = '✅';
const disagree = '❎';
const Discord = require('discord.js');
const hour = 3600000;
var msg, question;

module.exports.run = async(client, message, args) => {
    let results = ['Too close to call.', 'Majority agrees!', 'Majority disagrees!']
    let result = 0
    var agreeTotal = 0
    var disagreeTotal = 0
    if (args.length && !msg) {
        question = args.join(' ')
        msg = await message.channel.send(`Vote: ${question}\nYou have one hour!`)
        await msg.pin()
        await msg.react(agree);
        await msg.react(disagree);
    } else if (!args.length && msg) {
        message.channel.send(`https://discordapp.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`);
    } else if (!args.length && !msg) {
        message.channel.send('There is no current vote. Start one by typing `!vote` *your question*');
    }

    if (msg && args.length) {
        const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: hour});
    
        if (reactions.get(agree) && reactions.get(disagree)) {
            agreeTotal = reactions.get(agree).count - 1;
        }
        if (reactions.get(disagree)) {
            disagreeTotal = reactions.get(disagree).count - 1
        }
        if (agreeTotal > disagreeTotal) {
            result = 1
        } else if (agreeTotal < disagreeTotal) {
            result = 2
        }

        let embed = new Discord.RichEmbed()
            .setTitle('Results')
            .setColor(0xef971b)
            .setThumbnail('https://garmakarma.files.wordpress.com/2014/01/phoenixwright-aapicture8.png')
            .setDescription(question)
            .addField(`${agree}Agree`, agreeTotal, true)
            .addField(`${disagree}Disagree`, disagreeTotal, true)
            .setFooter(results[result])

        message.channel.send({embed})
        msg.unpin()
        msg = false;
        question = false;
    }
}

module.exports.help = {
    name: 'vote'
}