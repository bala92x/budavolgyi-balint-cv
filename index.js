#!/usr/bin/env node
'use strict';

const inquirer = require('inquirer');
const chalk = require('chalk');
const moment = require('moment');

const resume = require('./src/resume');
const photo = require('./src/photo');

const { green, red, cyan } = chalk.bold;
const resumePrompts = {
    type: 'list',
    name: 'resumeOptions',
    message: 'What are you interested in?',
    choices: [...Object.keys(resume), 'Photo', 'Exit']
};
const wrap = (color, toWrap) => {
    const rule = color('--------------------------------------\n\n');
    console.log(rule)
    console.log(toWrap());
    console.log(rule);
};
const main = () => {
    const about = `${cyan('Hello there!')} My name is ${cyan('Budavölgyi Bálint')}.
    
I am a ${moment().diff('1992-05-07', 'years')} years old junior web developer with almost ${moment().diff('2017-01-01', 'years') + 1} years of experience in planning, building, and maintaining
modern websites, webshops, mobile and web applications.
    
Welcome to my ${cyan('CV')}!
    
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
const exitHandler = () => {
    const goodbyeMessage = 'Thank you for your time! I look forward to hearing from you soon.\n\n';
    return wrap(green, () => goodbyeMessage);
};
const resumeHandler = () => {
    inquirer.prompt(resumePrompts).then(answer => {
        if (answer.resumeOptions === 'Exit') {
            exitHandler();
            return;
        }

        if (answer.resumeOptions === 'Photo') {
            wrap(green, () => green(photo));
        }

        const content = resume[answer.resumeOptions];

        if (typeof content === 'object') {
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
                    exitHandler();
                    return;
                }
            });
    });
};

main();