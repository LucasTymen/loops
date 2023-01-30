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
}
console.log("Bob's followers ==> " + bobsFollowers);
console.log("--------------------------");
console.log("Tina's followers ==> " + tinasFollowers);
console.log("--------------------------");
console.log("mutual followers ==> " + mutualFollowers);

// #### #### ---- LOOP - WHILE ---- #### ####
const cards = ["diamond", "spade", "heart", "club"];

let currentCard;
while (currentCard !== "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
console.log(currentCard);

// #### #### ---- LOOP - DO  WHILE ---- #### ####
// syntax
let countString = "";
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);

// ##### exemple
const firstMessage = "I will print!";
const secondMessage = "I will not print!";

// A do while with a stopping condition that evaluates to false
do {
  console.log(firstMessage);
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false) {
  console.log(secondMessage);
}

// Write your code below
let cupsOfSugarNeeded = 2;
let cupsAdded = 0;

do {
  cupsAdded++;
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);
console.log(cupsAdded);

// ########## adding BREAK point
const rapperArray = [
  "Lil' Kim",
  "Jay-Z",
  "Notorious B.I.G.",
  "Tupac",
  "Snoop Dog",
  "Cypress Hill",
];

// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}
console.log("And if you don't know, now you know.");

// ######### Reminder
/*

Loops perform repetitive actions so we don’t have to code that process manually every time.
How to write for loops with an iterator variable that increments or decrements
How to use a for loop to iterate through an array
A nested for loop is a loop inside another loop
while loops allow for different types of stopping conditions
Stopping conditions are crucial for avoiding infinite loops.
do...while loops run code at least once— only checking the stopping condition after the first execution
The break keyword allows programs to leave a loop during the execution of its block

*/
