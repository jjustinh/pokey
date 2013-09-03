var prompt = require("prompt");

const suits = ['C','D','H','S'];
const ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
const cards = makeCards(ranks,suits);
const handSize = 5;
var deck = cards;	

prompt.start();
console.log('Input Hands.  Input \'rand\' to have a hand generated randomly.')
prompt.get(['Black', 'White'], function(err, result){	
	if(err){return onErr(err);}	
	var blackHand;
	var whiteHand;
	if (result.Black.toLowerCase() != 'rand' && result.White.toLowerCase() != 'rand'){
			blackHand = splitHand(result.Black);
			whiteHand = splitHand(result.White);
	} else
	if (result.Black.toLowerCase() == 'rand' && result.White.toLowerCase() == 'rand'){				
			blackHand = generateHand();			
			whiteHand = generateHand();
	} else
	if (result.Black.toLowerCase() == 'rand' && result.White.toLowerCase() != 'rand'){
			whiteHand = splitHand(result.White);
			blackHand = generateHand();
	} else
	if (result.Black.toLowerCase() != 'rand' && result.White.toLowerCase() == 'rand'){
			blackHand = splitHand(result.Black);
			whiteHand = generateHand();
	} else { console.log('What did you do?'); }
	console.log('Black hand:');
	console.log(blackHand);
	console.log('White hand:');
	console.log(whiteHand);

});

function makeCards(primary, secondary){	
	var returnArray = new Array();
	for(var i=0; i < primary.length; i++){
		for(var ct=0; ct < secondary.length; ct++){
			var card = {rank: primary[i], suit: secondary[ct]}
			returnArray.push(card);
		}
	}
	return returnArray;	
}

function onErr(err){
	console.log(err);
	return 1;
}

function generateHand(){	
	var hand = new Array;
	for(var i = 0; i < handSize; i++ ){
		var randCard = deck[Math.floor(Math.random() * deck.length)];		
		var card = {rank: randCard.rank, suit: randCard.suit};
		dealFromDeck(card);
		hand.push(card);		
	}		
	return hand;
}

function handIsLegal(hand){	
	return false;
}

function dealFromDeck(card){
	var cardExisted = false;
	for(var i = 0; i < deck.length; i++){
		if(deck[i].suit == card.suit && deck[i].rank == card.rank){
			deck.splice(i,1);				
			cardExisted = true;			
			break;
		}
	}	
	return cardExisted;
}

function splitHand(hand){	
	var handArr = hand.split(" ");	
	var hand = new Array();		
	for(var i = 0; i < handArr.length; i++) {
		var cardPrimitive = handArr[i].split('');
		var card = {rank: cardPrimitive[0], suit: cardPrimitive[1]};		
		if (cardPrimitive.length > 2){
			var card = {rank: cardPrimitive[0]+cardPrimitive[1], suit: cardPrimitive[cardPrimitive.length - 1]};		
		}
		if(dealFromDeck(card) == true){
			hand.push(card);
		} else {
			return generateHand();			
		}
	}	
	return hand;	
}

function scoreHand(hand){
	return null;
}

function evaluateHands(blackHand, whiteHand){
	return null;
}

