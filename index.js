let deck={};
let drawCard;
let highCard;
let lowCard;


const cardDiv = document.getElementById("cardDiv");
const newGameButt=document.getElementById("newGame");
const drawCardButt = document.getElementById("drawCard");
const higherCardButt=document.querySelector(".highCard");
const lowerCardButt=document.querySelector(".lowCard");




// hämta API
async function getDeckOfCard(){
const res =await fetch ("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
const data= await res.json();
deck=data;
console.log(deck);
};
getDeckOfCard();

// drar kort
newGameButt.addEventListener("click", async () => {
  const res = await fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`);
  const data = await res.json();
  getValue(data);
  drawCard = data.cards[0].value;
  const cImage = document.createElement("img");
  const cNumber = document.createElement("h1");
  cNumber.innerText = data.cards[0].value;
  cImage.src = data.cards[0].image;
  cImage.alt = data.cards[0].value;
  cardDiv.appendChild(cImage);
  cardDiv.appendChild(cNumber);
  console.log(data.cards[0]);
  console.log(drawCard);
});

higherCardButt.addEventListener("click", async () => {
  const res = await fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`);
  const data = await res.json();
  getValue(data);
  highCard = data.cards[0].value;
  const cImage = document.createElement("img");
  const cNumber = document.createElement("h1");
  cNumber.innerText = data.cards[0].value;
  cImage.src = data.cards[0].image;
  cImage.alt = data.cards[0].value;
  cardDiv.appendChild(cImage);
  cardDiv.appendChild(cNumber);
  console.log(data.cards[0]);
  console.log(highCard);
});

lowerCardButt.addEventListener("click", async () => {
  const res = await fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`);
  const data = await res.json();
  getValue(data);
  lowCard = data.cards[0].value;
  const cImage = document.createElement("img");
  const cNumber = document.createElement("h1");
  cNumber.innerText = data.cards[0].value;
  cImage.src = data.cards[0].image;
  cImage.alt = data.cards[0].value;
  cardDiv.appendChild(cImage);
  cardDiv.appendChild(cNumber);
  console.log(data.cards[0]);
  console.log(lowCard);
});


//omvandla till siffror
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
