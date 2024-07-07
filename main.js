#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("**=====Welcome to my Quiz game=====**");
console.log("You are required to gain maximum 4 point for the window");
let points = 0;
//question 1
let quiz1 = await inquirer.prompt([
    {
        name: "one",
        message: "Who created Javascript?",
        type: "list",
        choices: ["Brendan Eich", "John Resig", "Tim Berners-Lee"]
    }
]);
if (quiz1.one == "Brendan Eich") {
    console.log(chalk.green.bold(chalk.green.bold("Your answer is correct.")));
    points++;
}
else {
    console.log(chalk.red.bold("incorrect answer"));
}
//question 2
let quiz2 = await inquirer.prompt([
    {
        name: "two",
        message: chalk.bold.green("Typescript is a superset of javascript?"),
        type: "list",
        choices: ["Python", "C++", "JAva", "Javascript"]
    }
]);
if (quiz2.two == "Javascript") {
    console.log(chalk.green.bold("Your answer is correct"));
    points++;
}
else {
    console.log(chalk.red.bold("incorrect answer"));
}
//question 3
let quiz3 = await inquirer.prompt([
    {
        name: "three",
        message: "Who founded Microsoft?",
        type: "list",
        choices: ["Steve Jobs", "Larry Page", "Bill Gates"]
    }
]);
if (quiz3.three == "Bill Gates") {
    console.log(chalk.green.bold("Your answer is correct"));
    points++;
}
else {
    console.log(chalk.red.bold("incorrect answer"));
}
//question 4
let quiz4 = await inquirer.prompt([
    {
        name: "four",
        message: "What is the most popular programming language in the world?",
        type: "list",
        choices: ["Java", "Python", "C++"]
    }
]);
if (quiz4.four == "Python") {
    console.log(chalk.green.bold("Your answer is correct"));
    points++;
}
else {
    console.log(chalk.red.bold("incorrect answer"));
}
//question 5
let quiz5 = await inquirer.prompt([
    {
        name: "five",
        type: "list",
        message: "Which language is used for web styling?",
        choices: ["Javascript", "HTML", "CSS"]
    }
]);
if (quiz5.five == "CSS") {
    console.log(chalk.green.bold("Yur answer is correct"));
    points++;
}
else {
    console.log(chalk.red.bold("incorrect answer"));
}
//output conditions
if (points > 4) {
    console.log(chalk.green.bold("Congratulation"));
    console.log(chalk.green.bold(`Your point is ${points}`));
}
else {
    console.log(chalk.red.bold("You loss! tey next time"));
    console.log(chalk.red.bold(`Your point is ${points}`));
}
