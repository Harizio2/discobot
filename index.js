const Discord = require('discord.js');
const bot = new Discord.Client;

const token = 'NjUxMjk3MzgzNzIzODI3MjAx.XeYCkg.shHeXic_e9ViuGxm4s6Ux_hoGlw';

bot.on('ready',() => {
console.log('the bot is online');
})

bot.on('message', msg=>{
	if(msg.content ==="HELLO"){
		msg.reply('HELLO FRIEND');
	}
	
})

bot.login(token);