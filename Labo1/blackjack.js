// JavaScript Document
"use strict"; // controleert of je var gebruikt om variabelen aan te maken; "veilig" JS schrijven

var arrCards = new Array("ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"),
	deal,
	hit,
	stand,
	player,
	dealer,
	playerScore,
	dealerScore;

function dealClick() {
	startGame();
}

function startGame() {
	resetGame();
	playCard(dealer, 1);
	playCard(player, 2);

	checkScore();
	disableControls(true, false, false);
}

function playCard(person, nummerOfCards) {
	for (var i = 0; i < nummerOfCards; i++) {
		var div = document.createElement("div");
		div.classList.add("card");
		// een random getal tussen 0 en 13
		var random                = getRandom(arrCards.length);
		div.style.backgroundImage = "url(images/" + arrCards[random] + eval(getRandom(3) + 1) + ".png)"

		var transformDeg = Math.floor(Math.random() * 7) + 1;
		transformDeg *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
		div.style.transform = "rotate(" + transformDeg + "deg)";

		var score = (random + 1) < 10? random + 1: 10;

		person.appendChild(div);

		if (person === player) {
			playerScore += score;
		} else {
			dealerScore += score;
		}
	}
}

function getRandom(max) {
	return Math.floor(Math.random() * max);
}

function checkScore() {

}

function disableControls(dealButtonDisabled, hitButtonDisnabled, standButtonDisnabled) {
	deal.disabled = dealButtonDisabled;
	hit.disabled  = hitButtonDisnabled;
	stand.disabled = standButtonDisnabled;
}

function resetGame() {

}

function hitClick() {
	playCard(player, 1);
}

function standClick() {
	disableControls(true, true, true);
}

function initializeElements() {
	deal  = document.getElementById("deal");
	hit   = document.getElementById("hit");
	stand = document.getElementById("stand");
	player = document.getElementById("player");
	dealer = document.getElementById("dealer");
}

function addEventListeneners() {
	deal.addEventListener("click", dealClick);
	hit.addEventListener("click", hitClick);
	stand.addEventListener("click", standClick);
}

function init() {
	initializeElements();
	addEventListeneners();
}

window.addEventListener("DOMContentLoaded", init);