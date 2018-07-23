const ball = '🎱';

module.exports.run = async(client, message, args) => {
    const answers = [
        'It is certain', 
        'It is decidedly so',
        'Without a doubt',
        'Yes - definitely',
        'You may rely on it',
        'As I see it, yes',
        'Most likely',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy',
        'Ask again later. Like much later',
        "Better not tell you now, you'll do something stupid",
        'Cannot predict now',
        "Don't count on it",
        'My reply is no',
        'My sources say no',
        'Outlook not so good',
        'Very doubtful',
        'What a stupid question',
        'Stop please',
        ball,
        'Insert dank meme',
        "Maybe when you're older",
        client.emojis.find('name', 'goToJail')
    ]
    let randomNum = Math.floor(Math.random() * answers.length)
    message.channel.send(`${ball}: ${answers[randomNum]}`)
}

module.exports.help = {
    name: '8ball'
}