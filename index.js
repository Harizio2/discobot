const Discord = require('discord.js');
const bot = new Discord.Client;

//const token = '';
var t = 'NjUx';
var o = 'Mjk3MzgzNzI';
var k = 'zODI3MjAx.XfQGO';
var e = 'Q.dFny7KovxxE';
var n = 'J2BIA-E4f__eqrfA';

var money = 100;
var playing = false;
var bet = 0;
var stay = false;

var deck = [];
var playerHand=0;
var dealerHand=0;

bot.on('ready',() => {
console.log('the bot is online');
})

bot.on('message', msg=>{
	var str = msg.content.toLowerCase();
	if(msg.content ==="HELLO"){
		msg.reply('HELLO FRIEND 2');
	}
	if (str == "!help"){
		msg.reply('Blackjack bot commands: \n !blackjack (bet) : start a new game with bet \n !hitme : draw a card \n !stay : stay');
	}
	var bjKey = "!blackjack ";
	var gambaI = str.indexOf(bjKey);
	if(str === "!play")
		playing = true;
	if(str === "!stop")
		playing = false
	if (str == "!isplaying")
		msg.reply(playing);
	if(gambaI == 0){
		var aLen = str.length - bjKey.length;
		var amount = str.substr(bjKey.length,aLen);
		var newBet = parseInt(amount,10);
		if(isNaN(newBet) || newBet < 0){
			msg.reply("You can't bet " +amount + ". That's illegal!");
		}
		else if(newBet > money){
			msg.reply("You don't have enough money to bet " + newBet+"$. Current money: " + money + "$");
		}
		else{
			msg.reply("Betting amount:" + amount + "$");
			bet = newBet;
			StartGame(msg);
		}
	}
	if(str =="!bet"){
		msg.reply(bet+"$");
	}
	if(str == "!money"){
		msg.reply(money+"$");
	}
	if(playing){
		//hitme
		if(stayed == false && str == '!hitme'){
			var newCard = Draw();
			var newTotal = playerHand + newCard;
			msg.reply('You draw ' + playerHand + " + " + newCard + " = " + newTotal); 
			if(newTotal > 21){
				msg.reply('BUSTED!');
				playing = false;
			}
			playerHand = newTotal;
		}
		
		//stay
		if(str == '!stay'){
			stayed = true;
			while(dealerHand < 17){
				var newCard = Draw();
				var newTotal = dealerHand + newCard;
				msg.reply('Dealer draws ' + dealerHand + " + " + newCard + " = " + newTotal); 
				if(newTotal > 21){
					msg.reply('Dealer BUSTED!');
					PlayerWin(msg);
					break;
				}
				dealerHand = newTotal;
			}
			if (playing){
				msg.reply('The dealer stays at ' + dealerHand);
				if(dealerHand == playerHand){
					msg.reply('Tie at ' + dealerHand + '!');
				}
				else if(dealerHand < playerHand){
					PlayerWin(msg);
				}
				else{
					msg.reply('The house wins!');
				}
				playing = false;
			}
		}
	}
})
function StartGame(msg){
	money -= bet;
	playerHand = 0;
	dealerHand = 0;
	stayed = false;
	playing = true;
	var draw1 = Draw();
	var draw2 = Draw();
	playerHand += draw1 + draw2;
	msg.reply("You draw a starting hand of " + draw1 + " + " + draw2 + " = " + playerHand + " \ !hitme to draw more, !stay to stay");
}
function Draw(){
	if(deck.length <= 0){
		ShuffleDeck();
	}
	var newCard = deck.pop();
	return newCard;
}
function Asd(){
	bet = 1337;
}
function ShuffleDeck(){
	//could have 1 to 14 to recognize them as jack queen etc
	//and count aces correctly later
	var cardValues = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10 ];
	deck = [];
	for(var i = 0; i < 4;i++){
		for(var c = 0; c < cardValues.length;c++){
			var randIndex = Math.floor(Math.random()*deck.length);
			deck.splice(randIndex,0,cardValues[c]);
		}
	}
}
function PrintDeck(msg){
	for(var i = 0; i < deck.length; i++){
		msg.reply(deck[i]);
	}
}
function PlayerWin(msg){
	msg.reply('You won ' + 2*bet + '$');
	money += bet*2;
	msg.reply('Total money ' + money + "$");
	playing = false;
}
bot.login(t+o+k+e+n);
//bot.login(token);