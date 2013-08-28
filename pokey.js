var prompt = require("./prompt/lib/prompt.js");

var suits = new Array('C','D','H','S');
var ranks = new Array('2','3','4','5','6','7','8','9','J','Q','K','A');
var cards = make2dArray(suits,ranks);

prompt.start();
prompt.get(['Hands'], function(err, result){
	if(err){return onErr(err);}
	console.log('well....')	
});

function make2dArray(primary, secondary){
	var returnArray = new Array()
	primary.forEach(returnArray.push(primary[]));
};

function onErr(err){
	console.log(err);
	return 1;
};

function realityCheck(Hands){	
	return false;
};

function splitHands(Hands){
	return null;
};

function evaluateHand(Hand){
	return null
};

