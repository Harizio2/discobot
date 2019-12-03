const Discord = require('discord.js');
const bot = new Discord.Client;

const token = 'NjUxMjk3MzgzNzIzODI3MjAx.XeYCkg.shHeXic_e9ViuGxm4s6Ux_hoGlw';

var money = 100;
var playing = false;
var bet = 0;
bot.on('ready',() => {
console.log('the bot is online');
})

bot.on('message', msg=>{
	var str = msg.content;
	if(msg.content ==="HELLO"){
		msg.reply('HELLO FRIEND 2');
	}
	var bjKey = "!blackjack ";
	var gambaI = str.indexOf(bjKey);
	if(str === "!play")
		playing = true;
	if(str === "!stop")
		playing = false
	if (str == "!isPlaying")
		msg.reply(playing);
	if(gambaI == 0){
		var aLen = str.length - bjKey.length;
		var amount = str.substr(bjKey.length,aLen);
		var newBet = parseInt(amount,10);
		if(isNaN(newBet) || newBet < 0){
			msg.reply("You can't bet " +amount + ". That's illegal!");
		}
		else{
			msg.reply("Betting amount:" + amount);
			bet = newBet;
		}
	}
	if(str == "!bet"){
		msg.reply(bet);
	}
	if(msg.content.includes('blackjack')){
		msg.reply('GAMBA!');
	}
})

bot.login(token);