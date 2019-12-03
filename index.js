const Discord = require('discord.js');
const bot = new Discord.Client;

const token = 'NjUxMjk3MzgzNzIzODI3MjAx.XeYCkg.shHeXic_e9ViuGxm4s6Ux_hoGlw';

bot.on('ready',() => {
console.log('the bot is online');
})

bot.on('message', msg=>{
	var str = msg.content;
	if(msg.content ==="HELLO"){
		msg.reply('HELLO FRIEND 2');
	}
	var bjKey = "blackjack ";
	var gambaI = str.indexOf(bjKey);
	if(gambaI == 0){
		var aLen = str.length - bjKey.length;
		var amount = str.substr(bjKey.length,aLen);
		msg.reply("Betting amount:" + amount);
	}
	if(msg.content.includes('blackjack')){
		msg.reply('GAMBA!');
	}
})

bot.login(token);