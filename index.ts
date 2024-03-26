#! /usr/bin/env node
import inquirer from "inquirer";

console.log("welcome to game - number_gussing_game00");

const randomNumber = Math.floor(Math.random() * 5 +1);

const answer = await inquirer.prompt([
    {
     name: "userGuessedNumber",
     type: "number",
     message: "Enter your guess number(Number limit from 1 to 5):",
    },
]);

if (answer.userGuessedNumber === randomNumber){
    console.log("congratulation ! you guess a correct number.");
}
else{
    console.log("Sorry, you guess awrong number");
}
