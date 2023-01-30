// #### #### ---- LOOP - WHILE ---- #### ####
// #### #### Testing NEST LOOPING #### ####
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log("Both arrays have the number: " + yourArray[j]);
    }
    console.log(myArray[i] + " --- " + yourArray[j]);
  }
}
// Write your code below
let bobsFollowers =
  (["rob", "david", "brian", "clarisse"], ["josh", "ella", "janis", "peter"]);
let tinasFollowers = ["rob", "sarah", "clarisse"];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};
console.log("Bob's followers ==> " + bobsFollowers)
console.log("--------------------------")
console.log("Tina's followers ==> " + tinasFollowers)
console.log("--------------------------")
console.log("mutual followers ==> " + mutualFollowers)

// #### #### ---- LOOP - WHILE ---- #### ####
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard
while (currentCard !== "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard)
}
 console.log(currentCard)

 // #### #### ---- LOOP - DO  WHILE ---- #### ####
// syntax
let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);

// ##### exemple
const firstMessage = 'I will print!';
const secondMessage = 'I will not print!';

// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};

// Write your code below
