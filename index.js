#!/usr/bin/env node
'use strict';

const inquirer = require('inquirer');
const chalk = require('chalk');

const resume = require('./resume.js');

const { green, red, cyan } = chalk.bold;
const resumePrompts = {
    type: 'list',
    name: 'resumeOptions',
    message: 'What are you interested in?',
    choices: [...Object.keys(resume), 'Exit']
};
const wrap = (color, toWrap) => {
    const rule = color('--------------------------------------\n\n');
    console.log(rule)
    console.log(toWrap());
    console.log(rule);
};
const main = () => {
    const about = `${cyan('Hello there!')} My name is ${cyan('Budavölgyi Bálint')}, I am a junior web developer with 3 years of experience. Welcome to my ${cyan('CV')}!
    
    `;

    wrap(green, () => about);
    resumeHandler();
};
const formatInfo = (info, depth = 0, needsKey = false) => {
    const keys = Object.keys(info);

    const lines = keys.map((key, index, array) => {
        const value = info[key];
        
        if (typeof value === 'object') {
            return formatInfo(value, depth + 1);
        } else {
            const indentation = `${'     '.repeat(depth)}`;
            const keyStr = needsKey ? ` ${key}` : '';
            const arrow = `${red('=>')}`;
            const item = index === 0 ? cyan(value) : value;
            const lineBreak = `\n${index === array.length - 1 ? '\n' : '' }`;
            
            return `${indentation}${keyStr} ${arrow} ${item} ${lineBreak}`;
        }
    });

    return lines.join('');
};
const resumeHandler = () => {
    inquirer.prompt(resumePrompts).then(answer => {
        if (answer.resumeOptions === 'Exit') {
            return;
        }

        const content = resume[answer.resumeOptions]

        if (content.length == 0 || !content) {
            wrap(green, () => 'To be uploaded, sorry!');
        } else {
            wrap(green, () => {
                let lines = '';

                if (Array.isArray(content)) {
                    content.forEach((info) => {
                        lines += formatInfo(info);
                    });
                } else {
                    lines += formatInfo(content, 0, true);
                }

                return lines;
            });
        }

        inquirer
            .prompt({
                type: 'list',
                name: 'exitBack',
                message: 'Go back or Exit?',
                choices: ['Back', 'Exit']
            })
            .then(choice => {
                if (choice.exitBack == 'Back') {
                    resumeHandler();
                } else {
                    return;
                }
            });
    });
};

main();