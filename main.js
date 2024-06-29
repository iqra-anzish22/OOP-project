#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Person {
    _personality;
    constructor() {
        this._personality = 'Mystery';
    }
    userInput(input) {
        if (input.includes('talk to other about yourself')) {
            this._personality = 'talk happly';
        }
        else if (input.includes('keep your word to yourself')) {
            this._personality = 'talk rude';
        }
    }
    get personality() {
        return this._personality;
    }
}
class Main {
    async main() {
        const ans = await inquirer.prompt({
            type: 'list',
            name: 'choice',
            message: chalk.yellow('tell your behaviour'),
            choices: [
                '1: talk to others about my self',
                '2: keep quite and dont ask questions'
            ]
        });
        let myPerson = new Person();
        myPerson.userInput(ans.choice);
        console.log(chalk.magenta(`you are ${myPerson.personality}`));
    }
}
const myObject = new Main();
myObject.main();
