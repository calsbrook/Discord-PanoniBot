
module.exports = {
    ping: ping
}
function ping() {
    if(message.content.startsWith("!PING")) {
        message.channel.send("Pong");
    }
}
console.log('ping is working')