const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

module.exports.run = async(client, message, args) => {
    let bigMessage = []
    let splitMessage = []

    for (i=0; i<args.length; i++){
        if(args[i].search('<:') === 0 || args[i].search(':') === 0) {
            splitMessage.push(args[i])
        } else {
            let bigString = ''
            for (j=0; j<args[i].length; j++) {
                if (/^[a-zA-Z]+$/.test(args[i][j])){
                    bigString += ":regional_indicator_" + args[i][j].toLowerCase() + ":"
                } else if (/^\d+$/.test(args[i][j])){
                    bigString += `:${digits[parseInt(args[i][j])]}:`
                } else if (args[i][j] === '!'){
                    bigString += ':exclamation:'
                } else if (args[i][j] === '?'){
                    bigString += ':question:'
                }
                else {
                    bigString += args[i][j]
                }
            }
            if (i<args.length) bigString += '   '
            splitMessage.push(bigString)
        }
    }

    for (i=0; i<splitMessage.length; i++) {
        bigMessage += splitMessage[i]
    }
    message.channel.send(bigMessage)
}

module.exports.help = {
    name: 'bigTalk'
}