module.exports.run = async(client, message, args) => {
    let bigMessage = ''
    let splitMessage = ''
    
    for (i=0; i<args.length;i++) {
        splitMessage += args[i]
        splitMessage += ' '
    }

    for (i=0;i<splitMessage.length;i++) {
        if (/^[a-zA-Z]+$/.test(splitMessage[i])){
            bigMessage += ":regional_indicator_" + splitMessage[i].toLowerCase() + ':'
        }
        else if (/\s/.test(splitMessage[i])) {
            bigMessage += '   '
        }
        else if (splitMessage[i] === '!'){
            bigMessage += ':exclamation:'
        } 
        else if(splitMessage[i] === '?'){
            bigMessage += ':question:'
        }
        else {
            bigMessage += splitMessage[i]
        }
    }

    message.channel.send(bigMessage)
}

module.exports.help = {
    name: 'bigTalk'
}