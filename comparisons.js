// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
console.log("is numberTeachers less than numberStudents?",numberTeachers<numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
console.log("is numberTeachers not equal to numberStudents?", numberTeachers === stringTeachers);
// this should log: false

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log("is numberTeachers not equal to numberStudents?", numberTeachers!==numberStudents);
// this should log: true


// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log("is numberStudents greater than or equal to 20?", numberStudents>=20)
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log("is numberStudents greater than or equal to 21?", numberStudents>=21)
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log("is numberStudents less than or equal to 20?", numberStudents<=20)
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log("is numberStudents less than or equal to 21?", numberStudents<=21)
// this should log: true


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain. compare if 4 is less than 9: this should log : true

var books = 3;
console.log(4 < books);
// YOU DO: Explain. compare if 4 is less than 3; books assigned to 3

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.friends assigned to 6 and siblings to 2, compare if 6 is more than 2, this should log : true

var attendees = 9;
var meals = 8;
console.log(attendees != meals);
// YOU DO: Explain. attendees assigned to 9 and meals assigned to 8, compare if 9 is not strickly equal to 8, this should log ; true


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats

console.log(lovesToplay && lovesTreats);

// Determine if the dog loves to play and loves the dog park

console.log(lovesToplay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park

console.log(lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy
if (age < 2) {
  isAPuppy = true;
}
console.log(lovesToPlay && isAPuppy)

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: true and true, becuae I define the condition for puppy age is 2 and the dog's age is one. He is a puppy.
