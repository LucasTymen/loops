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
