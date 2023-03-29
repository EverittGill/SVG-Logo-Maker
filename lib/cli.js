const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');


class CLI {
    constructor(text, textColor, color, shape) {
        this.text = text
        this.textColor = textColor
        this.shape = shape
        this.color = color
    }
    run(){
        return inquirer
          .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'type up to three characters to be used in your logo',
                validate: async (input) => {
                    if (input.length > 3) {
                       return 'You an only use 3 or fewer characters for this one';
                    }
              
                    return true;
                },
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'What color do you want the text to be?',
            },
            {
                type: 'input',
                name: 'color',
                message: 'What color do you want your logo to be?',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose the shape of your new logo',
                choices: ['Circle', 'Triangle', 'Square'],
            }
          ])
          .then((answers) => {
            return writeFile(
                join(__dirname, '..', 'output', 'logo.svg'),
                createDocument(answers.text, answers.textColor, answers.shape, answers.color),
                { encoding: 'utf8' } // specify the encoding to write the file as a string
              );
          })
        
    }

}

const cli = new CLI();

cli.run()
  .then(() => {
    console.log('Logo created successfully!');
  })
  .catch((error) => {
    console.error('An error occurred, write it again:', error);
  });
