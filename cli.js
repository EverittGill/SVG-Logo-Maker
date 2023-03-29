const inquirer = require('inquirer');
const { join } = require('path')
const { writeFile } = require('fs/promises');
// const { createDocument } = require('./document');


class CLI {
    constructor(text, shape, color) {
        this.text = text
        this.shape = shape
        this.color = color
    }
}