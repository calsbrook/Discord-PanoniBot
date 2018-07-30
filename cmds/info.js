module.exports.run = async(client, message, args) => {
    if (args.length) {
        switch (args[0]) {
            case '8ball':
                message.channel.send("Ask the magic 8 ball any question by typing !8ball *Your question here*")
                break;
            case 'ping':
                message.channel.send("Check the ping of the client and the api by typing !ping")
                break;
            case 'ticTacToe':
                message.channel.send("Play a game of Tic Tac Toe with a friend by typing !ticTacToe")
                break;
            case 'vote':
                message.channel.send("Start a vote! Type !vote and then your question.  Everyone will have 15 seconds to chime in, just like real life")
                break;
            default:
                message.channel.send("You've stumped me")
        }
    } else {
        message.channel.send("These are the subjects you can get info on:\n1) 8ball\n2) ping\n3) ticTacToe\n4) vote");
    }
}

module.exports.help = {
    name: 'info'
}