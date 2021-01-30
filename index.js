const chalk = require('chalk');
const inquirer = require('inquirer');

console.clear();
console.log("");
console.log(chalk.red("▄▄▄   ▄▄▄· ▪   ▐ ▄ ▄▄▄▄·       ▄▄▌ ▐ ▄▌    ▄▄▄▄▄▄▄▄ .▐▄• ▄ ▄▄▄▄▄"));
console.log(chalk.red("▀▄ █·▐█ ▀█ ██ •█▌▐█▐█ ▀█▪▪     ██· █▌▐█    •██  ▀▄.▀· █▌█▌▪•██  "));
console.log(chalk.red("▐▀▀▄ ▄█▀▀█ ▐█·▐█▐▐▌▐█▀▀█▄ ▄█▀▄ ██▪▐█▐▐▌     ▐█.▪▐▀▀▪▄ ·██·  ▐█.▪"));
console.log(chalk.red("▐█•█▌▐█ ▪▐▌▐█▌██▐█▌██▄▪▐█▐█▌.▐▌▐█▌██▐█▌     ▐█▌·▐█▄▄▌▪▐█·█▌ ▐█▌·"));
console.log(chalk.red(".▀  ▀ ▀  ▀ ▀▀▀▀▀ █▪·▀▀▀▀  ▀█▄▀▪ ▀▀▀▀ ▀▪     ▀▀▀  ▀▀▀ •▀▀ ▀▀ ▀▀▀ "));
console.log(chalk.greenBright("                                                  For Minecraft"));

const rainbow = {
    index: -1,
    colors: [
        '4',
        'c',
        '6',
        'e',
        '2',
        'a',
        'b',
        '3',
        '1',
        '9',
        'd',
        '5'
    ],
    node_colors: [
        'AA0000',
        'FF5555',
        'FFAA00',
        'FFFF55',
        '00AA00',
        '55FF55',
        '55FFFF',
        '00AAAA',
        '0000AA',
        '5555FF',
        'FF55FF',
        'AA00AA'
    ]
};


var text = '';
var character = '';


inquirer
    .prompt([
    {
        type: "input",
        message: "What's the text to format?\n",
        name: "text",
        prefix: chalk.red("»")
    }]).then(answers => {
        text = answers.text;

        console.log("\n");
        inquirer
            .prompt([
            {
                type: "list",
                message: "What's the character before color code?\n",
                name: "character",
                prefix: chalk.red("»"),
                choices: ["&", "§"]
            }]).then(answers => {
                
                character = answers.character;
                console.log("\n");
                
                var formated = text.split('');
                var result = '';
                var node_result = '';

                for (x = 0; x < formated.length; x++) {
                    rainbow.index++;

                    if (rainbow.index > rainbow.colors.length - 1) {
                        rainbow.index = 0;
                    }

                    if (formated[x] == " ") {
                        result += formated[x];
                    }
                    else
                        result += character + rainbow.colors[rainbow.index] + formated[x];
                    node_result += chalk.hex(rainbow.node_colors[rainbow.index])(formated[x]);
                }

                for (x = 0; x < rainbow.colors.length; x++) {

                }

                console.log("PREVIEW: " + node_result);
                console.log("RESULT: " + result);

            }).catch(error => {
                if(error.isTtyError) {
                    console.log(chalk.bgRed("ERROR: " + error + " - " + error.line));
                    process.exit(0);
                } else {
                    console.log(chalk.bgRed("ERROR: " + error + " - " + error.prototype.line));
                    process.exit(0);
                }
            });


    }).catch(error => {
        if(error.isTtyError) {
            console.log(chalk.bgRed("ERROR: " + error + error.length));
            process.exit(0);
        } else {
            console.log(chalk.bgRed("ERROR: " + error + error.length));
            process.exit(0);
        }
    });