// JavaScript Document
"use strict"; // controleert of je var gebruikt om variabelen aan te maken; "veilig" JS schrijven

var arrCards    = new Array("ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"),
	deal,
	hit,
	stand,
	player,
	dealer,
	playerScore = 0,
	dealerScore = 0,
	chipCount   = 100,
	resetChip,
	chip1,
	chip5,
	chip10,
	inzet = 0,
	playing = false;

function dealClick() {
	startGame();
	playing = true;
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
		div.style.backgroundImage = "url(images/" + arrCards[random] + eval(getRandom(3) + 1) + ".png)";

		var transformDeg    = Math.floor(Math.random() * 7) + 1;
		transformDeg *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
		div.style.transform = "rotate(" + transformDeg + "deg)";

		var score = (random + 1) < 10 ? random + 1 : 10;

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
	document.getElementById("playerScore").innerHTML = playerScore.toString();
	document.getElementById("dealerScore").innerHTML = dealerScore.toString();

	if (playerScore > 21) winner(dealer)
}

function winner(person) {
	var message = document.getElementById("result");
	if (person === dealer) {
		message.innerHTML = "Dealer wins!";
		setTimeout(function () {
			document.getElementById("result").innerHTML = "";
			resetGame();
			disableControls(true, true, true);
		}, 1500);
	} else if (person === player) {
		message.innerHTML = "Player wins!";
		geefPrijs();
		setTimeout(function () {
			document.getElementById("result").innerHTML = "";
			resetGame();
		}, 1500);
	}

	playing = false;
	inzet = 0;
	document.getElementById("inzet").innerHTML = "0";
}

function geefPrijs() {
	chipCount += inzet * 2;
	document.getElementById("aantalChips").innerHTML = chipCount.toString();
}

function disableControls(dealButtonDisabled, hitButtonDisnabled, standButtonDisnabled) {
	deal.disabled  = dealButtonDisabled;
	hit.disabled   = hitButtonDisnabled;
	stand.disabled = standButtonDisnabled;
}

function resetGame() {
	var cards = document.querySelectorAll(".card");
	for (var i = 0, len = cards.length; i < len; i++) {
		cards[i].remove();
	}
	playerScore = 0;
	dealerScore = 0;
	checkScore();
	document.getElementById("aantalChips").innerHTML = chipCount.toString();
}

function hitClick() {
	playCard(player, 1);
	checkScore();
}

function standClick() {
	disableControls(true, true, true);
	while (dealerScore < playerScore) {
		playCard(dealer, 1);
		checkScore();
	}
	if (dealerScore >= playerScore && dealerScore <= 21) winner(dealer);
	else winner(player);
}

function initializeElements() {
	deal      = document.getElementById("deal");
	hit       = document.getElementById("hit");
	stand     = document.getElementById("stand");
	player    = document.getElementById("player");
	dealer    = document.getElementById("dealer");
	var chips = document.querySelectorAll(".chip");
	resetChip = chips[0];
	chip1     = chips[1];
	chip5     = chips[2];
	chip10    = chips[3];
}

function addEventListeneners() {
	deal.addEventListener("click", dealClick);
	hit.addEventListener("click", hitClick);
	stand.addEventListener("click", standClick);
	resetChip.addEventListener("click", function () {
		zetInzet(inzet * -1)
	});
	chip1.addEventListener("click", function () {
		if (chipCount < 1) return;
		zetInzet(1);
	});
	chip5.addEventListener("click", function () {
		if (chipCount < 5) return;
		zetInzet(5);
	});
	chip10.addEventListener("click", function () {
		if (chipCount < 10) return;
		zetInzet(10);
	});
}

function zetInzet(aantal) {
	if (playing == true) return;
	inzet += aantal;
	document.getElementById("inzet").innerHTML = inzet.toString();
	chipCount -= aantal;
	document.getElementById("aantalChips").innerHTML = chipCount.toString();
	if (inzet > 0) disableControls(false, true, true);
	else disableControls(true, true, true);
}

function init() {
	initializeElements();
	addEventListeneners();
}

window.addEventListener("DOMContentLoaded", init);
