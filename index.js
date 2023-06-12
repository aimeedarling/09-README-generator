const inquirer = require('inquirer');
const fs = require('fs');
//imports generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown')
//needed to save generated README into a different folder as to not replace README for repo
const path = require('path')

inquirer
    //prompts user to input information
    .prompt([
        {
            type: 'input',
            name:'title',
            message:`What's your project's title?`
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for use ',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators and any tutorials followed.',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide guidelines for contribution.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide instructions for testing.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide your email.',
        },
        {
            type:'input' ,
            name: 'github',
            message:'Provide your github username',
        },
        //common license options included here
        {
            type: 'list',
            name: 'license',
            message: 'What license are you using?',
            choices: ['MIT', 'Apache 2.0', 'BSD 2', 'Mozilla Public License', 'none']
        },
    ])
    //once user inputs data, create file.
    .then((data) => {
        const fileName = `README.md`
        fs.writeFile(path.join('dist',fileName), generateMarkdown(data), (error => error ? console.log('error') : console.log('Document created! ✨')))
    })
