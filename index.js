let deck = {};

const highOrLow = document.querySelector(".higherOrLower");
const drawCardButt = document.getElementById("drawCard");

//hämta kortleken
  async function getDeckOfCard () {
  const res = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
  const data = await res.json();
  deck = data;
  console.log(deck);
}
getDeckOfCard();

//dra kort
  let drawCard;
  const high = document.querySelector(".higherCard");
  drawCardButt.addEventListener("click", async () => {
  const res = await fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`);
  removeClass(high, low);
  const data = await res.json();
  getValue(data);
  drawCard = data.cards[0].value;
  const cardImg = document.createElement("img");
  const cardNum = document.createElement("h1");
  cardNum.innerText = data.cards[0].value;
  cardImg.src = data.cards[0].image;
  cardImg.alt = data.cards[0].value;
  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(cardNum);
  console.log(data.cards[0]);
  console.log(drawCard);
});

const player = document.querySelector(".player");
const win = document.querySelector("#youWin");
const loose = document.querySelector("#youLoose");
const same = document.querySelector("#youDraw");

//higher knappen

let higherCard;
high.addEventListener("click", async () => {
  const res = await fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`);
  const data = await res.json();
  const cardImg = document.createElement("img");
  const cardNum = document.createElement("h1");
  cardImg.src = data.cards[0].image;
  cardImg.alt = data.cards[0].value;
  getValue(data);
  higherCard = data.cards[0].value;
  cardNum.innerText = data.cards[0].value;
  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(cardNum);
  compare(drawCard, higherCard, player, loose , same, win);
  console.log(data.cards[0]);
  console.log(higherCard);

});

// lower knappen

  const low = document.querySelector(".lowerCard");
  let lowerCard;
  low.addEventListener("click", async () => {
  const res = await fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`);
  const data = await res.json();
  const cardImg = document.createElement("img");
  const cardNum = document.createElement("h1");
  cardImg.src = data.cards[0].image;
  cardImg.alt = data.cards[0].value;
  getValue(data);
  lowerCard = data.cards[0].value;
  cardNum.innerText = data.cards[0].value;
  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(cardNum);
  compare(lowerCard, drawCard, player, loose, same, win);
  console.log(data.cards[0]);
  console.log(lowerCard);
});

//omvandla värden till siffror
function getValue(data) {
	switch (data.cards[0].value) {
	  case "JACK":
		data.cards[0].value = 11;
		break;
	  case "QUEEN":
		data.cards[0].value = 12;
		break;
	  case "KING":
		data.cards[0].value = 13;
		break;
	  case "ACE":
		data.cards[0].value = 1;
	  default:
		data.cards[0].value = Number(data.cards[0].value);
	}
  }

//IF sats för att visa om du vinner eller inte och vilken text den ska visa vid vilken kombination av händelser. 
// PLayer1 är konstanten, 2,3,4 är olika scenarier och vilken text som ska visas eller gömmas
function compare(number1, number2, player1, player2, player3, player4) {
	if (number1 > number2) {
	  player1.classList.add("hide");
	  player2.classList.remove("hide");
	} else if (number1 === number2) {
	  player1.classList.add("hide");
	  player3.classList.remove("hide");
	} else if (number1 < number2) {
	  player1.classList.add("hide");
	  player4.classList.remove("hide");
	}
  }
  
//lägg till class
function addClass(...e) {
  for (let i = 0; i < arguments.length; i++) {
    e[i].classList.add("hide");
  }
}
//ta bort class
function removeClass(...e) {
  for (let i = 0; i < arguments.length; i++) {
    e[i].classList.remove("hide");
  }
}
















