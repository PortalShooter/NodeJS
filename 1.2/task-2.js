#!/usr/bin/env node
const rl = require('readline');
const input = rl.createInterface(process.stdin, process.stdout);

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers');
const { log } = require('console');
const argv = yargs(hideBin(process.argv)).argv

const command = argv._[0]

if(command === 'cmd') {
    const hiddenNumber = randomInteger(0, 100)
    console.log('Загадано число в диапазоне от 0 до 100')
    input.on('line', (line) => {
        if(line > hiddenNumber) {
            console.log('Меньше');
        } else if(line < hiddenNumber) {
            console.log('Больше');
        } else {
            console.log('Отгадано число', hiddenNumber);
            input.close()
        }
    })
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}