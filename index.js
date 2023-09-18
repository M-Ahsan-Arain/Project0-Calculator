#! /usr/bin/env node
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function Welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Lets start calculating...");
    await sleep();
    rainbowTitle.stop();
    console.log(chalk.green(` 
                   _________________
                 |  _______________  |
                 | | 7 | 8 | 9 | + | |
                 | |___|___|___|___| |
                 | | 4 | 5 | 6 | - | |
                 | |___|___|___|___| |
                 | | 1 | 2 | 3 | * | |
                 | |___|___|___|___| |
                 | | . | 0 | = | / | |
                 | |___|___|___|___| |
                 |___________________|\n`));
}
async function askQuestion() {
    const answers = await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operator",
            message: chalk.redBright("which operation do you want to perform? \n"),
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter number 1: "
        },
        {
            type: "number",
            name: "num2",
            message: "Enter number 2: "
        }
    ]);
    if (answers.operator == "Addition") {
        console.log(chalk.green(`\t${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if (answers.operator == "Subtraction") {
        console.log(chalk.green(`\t${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if (answers.operator == "Multiplication") {
        console.log(chalk.green(`\t${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else {
        console.log(chalk.green(`\t${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
}
async function start() {
    await Welcome();
    await startAgain();
    // askQuestion();
}
async function startAgain() {
    do {
        await askQuestion();
        var restartAgain = await inquirer
            .prompt([
            {
                type: "input",
                name: "restart",
                message: "Do you want to continue? press y or n: "
            }
        ]);
    } while (restartAgain.restart == 'y' || restartAgain.restart == 'Y' || restartAgain.restart == 'yes' || restartAgain.restart == 'YES');
    {
        if (restartAgain.restart != 'y') {
            console.log(chalk.redBright(`
            
             /$$$$$$                            /$$       /$$$$$$$                     
            /$$__  $$                          | $$      | $$__  $$                    
           | $$  \__/  /$$$$$$   /$$$$$$   /$$$$$$$      | $$  \ $$ /$$   /$$  /$$$$$$ 
           | $$ /$$$$ /$$__  $$ /$$__  $$ /$$__  $$      | $$$$$$$ | $$  | $$ /$$__  $$
           | $$|_  $$| $$  \ $$| $$  \ $$| $$  | $$      | $$__  $$| $$  | $$| $$$$$$$$
           | $$  \ $$| $$  | $$| $$  | $$| $$  | $$      | $$  \ $$| $$  | $$| $$_____/
           |  $$$$$$/|  $$$$$$/|  $$$$$$/|  $$$$$$$      | $$$$$$$/|  $$$$$$$|  $$$$$$$
            \______/  \______/  \______/  \_______/      |_______/  \____  $$ \_______/
                                                                    /$$  | $$          
                                                                   |  $$$$$$/          
                                                                    \______/           
                                                                    
                                                                    `));
            return;
        }
    }
}
start();
