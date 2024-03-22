#!/usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number
//2) User input for guessing number
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "Number",
        message: "Please guess a number between 1-6",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congragulations! You guessed correct number");
}
else {
    console.log("You guessed incorrect number");
}
