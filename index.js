var inquirer = require("inquirer");
var questions = require('./questions.json');
var BasicCard = require('./BasicCard');
var ClozeCard = require('./ClozeCard');

var cardOne = new BasicCard("Who was the first president white", "bob");
var cardTwo = new ClozeCard("who was the second president white", "white");

console.log("----------Basic Card---------------")
console.log(cardOne);
console.log(cardOne.front);
console.log(cardOne.back);

console.log("----------Cloze Card---------------")
console.log(cardTwo);
console.log(cardTwo.partial);
console.log(cardTwo.text);
console.log(cardTwo.cloze);

console.log("----------Basic Card part 2 ---------------")
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front);

// "George Washington"
console.log(firstPresident.back);

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze);

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

var brokenCloze = new ClozeCard("This doesn't work", "oops");
