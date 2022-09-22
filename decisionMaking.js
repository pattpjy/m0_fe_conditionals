// This exercise file is a little different from the others you have seen so far. Read carefully!
// Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
// Spend some time changing the variables and running the file to see how the story changes.


var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!";
} else if (bearChoice === 2) {
  "You tell the bear the " + bearClothing + " is too small and it starts to cry!";
} else if (bearChoice === 3) {
  "You run as fast as you can into the next room. It's full of snakes!";
} else {
  "You stay with the bear and become it's best friend!";
}


// Questions
// 1. In English, using technical vocabulary, describe what is happening between lines 12 and 16.
// create condition if doorChoic is strickly equal to 1, bearClothing is a hat, if not, it will be scarf
// 2. What variable has a new value assigned to it after the first if statement executes?
bearClothing
// 3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
scarf
// 4. In English, using technical vocabulary, describe what is happening between lines lines 25 and 33.
decalre if statement with condition if bearChoice strickly equal to 1, concatenate " you off the bear your" insert assigned bearCloth close with is too small for the bear, do you
// 5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

//You run as fast as you can into the next room it's full of snakes

// 6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
//You see a bear putting on a hat
// it looks like that hat is too small do you
// 1. Offer your own to the bear?"
// 2. Point it out to the bear?")?
// 3. Make a dash for the next room?
// you tell the bear that the hat is too small and it starts to cry.
// 7. What is your favorite ending?
