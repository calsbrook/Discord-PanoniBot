var Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("message", function(message)
{
	
	var input = message.content.toUpperCase();
	// makes sure the command works regardless of upper or lowercase
	
	if(input === "HI")
	{
		bot.reply(message, "Hey wassup hello!");
	}

	if(input === "!PING")
	{
		bot.sendMessage(message, "Pong");
	}

	if(input === "KAPPA")
	{
		bot.sendFile(message, "http://i.imgur.com/A4YPwrH.png");
	}

	if(input === "FRANKERZ")
	{
		bot.sendFile(message, "http://i.imgur.com/UgWaONb.png");
	}

	if(input === "KEEPO")
	{
		bot.sendFile(message, "http://i.imgur.com/YyIhue6.png");
	}

	if(input === "HERE COME DAT BOI")
	{
		bot.sendFile(message, "https://pbs.twimg.com/profile_images/726464672400953344/4nX44_A7.jpg");
		bot.sendMessage(message, "o shit waddup!");
	}
});

bot.loginWithToken(""); //insert bot login token here which can be found at https://discordapp.com/developers/docs/intro

