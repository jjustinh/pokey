var prompt = require("prompt");

const suits = ['C','D','H','S'];
const ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
const cards = make2dArray(ranks,suits);
console.log(cards);
prompt.start();
prompt.get(['Hands'], function(err, result){
	if(err){return onErr(err);}
	console.log('well....')	
});

function make2dArray(primary, secondary){	
	var returnArray = new Array();
	for(var i=0;i<primary.length;i++){
		for(var ct=0;ct<secondary.length;ct++){
			returnArray.push(primary[i] + secondary[ct]);
		}
	}
	return returnArray;	
};

function onErr(err){
	console.log(err);
	return 1;
};

function realityCheck(hands){	
	return false;
};

function splitHands(hands){
	return null;
};

function evaluateHand(hand){
	return null
};

