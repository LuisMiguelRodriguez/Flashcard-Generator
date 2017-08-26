var inquirer = require("inquirer");
var questions = require('./questions.json');
var BasicCard = require('./BasicCard');
var ClozeCard = require('./ClozeCard');


console.log("----------Basic Card part 2 ---------------")
var firstPresident = BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front);

// "George Washington"
console.log(firstPresident.back);

var firstPresidentCloze = ClozeCard("George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze);

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

var brokenCloze = new ClozeCard("This doesn't work", "oops");
