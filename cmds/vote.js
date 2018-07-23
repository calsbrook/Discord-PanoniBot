const agree = '✅';
const disagree = '❎';

module.exports.run = async(client, message, args) => {
    let results = ['Too close to call.', 'Majority agrees!', 'Majority disagrees!']
    let result = 0
    var agreeTotal = 0
    var disagreeTotal = 0
    let msg = await message.channel.send(`Vote: ${args.join(' ')}\nYou have 15 seconds!`)
    await msg.react(agree);
    await msg.react(disagree);

    const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 15000});

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

    message.channel.send(`R E S U L T S\n\n${agree}Agree: ${agreeTotal}\n\n${disagree}Disagree: ${disagreeTotal}\n\n${results[result]}`);
}

module.exports.help = {
    name: 'vote'
}