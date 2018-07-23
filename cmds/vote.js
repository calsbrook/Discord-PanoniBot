module.exports.run = async(client, message, args) => {
    console.log(args.join(' '))
}

module.exports.help = {
    name: 'vote'
}