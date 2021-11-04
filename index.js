/* 

// Code your solutions in this file

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }

  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);
*/

const names = ["Lisa", "Kaitlin", "Jan"];
const events = ["surprise"];
const cardsWritten = [];

function writeCards(names, events) {
    for (let a = 0; a < names.length; a++) {
        cardsWritten.push (`Thank you, ${names[a]}, for the wonderful ${events} gift!`);
    }
return cardsWritten;
}

writeCards();

function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}