module.exports.run = async(client, message, args) => {
    if (args.length) {
        switch (args[0]) {
            case '8ball':
                message.channel.send("Ask the magic 8 ball any question by typing `!8ball` *your question*")
                break;
            case 'ping':
                message.channel.send("Check the ping of the client and the api by typing `!ping`")
                break;
            case 'ticTacToe':
                message.channel.send("Play a game of Tic Tac Toe with a friend by typing `!ticTacToe`")
                break;
            case 'vote':
                message.channel.send("Democracy! Always check if there is a current vote by typing `!vote`. This will also give you a link to the current vote.\n\nTo start a poll type `!vote` *your question*.  Everyone will have 1 hour to chime in, just like real life.")
                break;
            case 'bigTalk':
                message.channel.send("Make your letters big for big boys to read. Type !bigTalk and then your message.")
                break;
            default:
                message.channel.send("You've stumped me")
        }
    } else {
        message.channel.send("These are the subjects you can get info on:\n1) 8ball\n2) ping\n3) ticTacToe\n4) vote\n5) bigTalk");
    }
}

module.exports.help = {
    name: 'info'
}