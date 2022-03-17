#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv

const rl = require('readline');
const input = rl.createInterface(process.stdin, process.stdout);
const fs = require('fs/promises');

const fileName = argv._[0] + '.json'

let json;

fs.readFile(fileName, 'utf-8').then((file) => {
    json = file
}).catch(err => {
    if(err.code === 'ENOENT') {
        const jsonInit = {
            numberGame: 0,
            winGame: 0,
            loseGame: 0,
            numberEagle: 0,
            numberTails: 0,
        }
        fs.writeFile(fileName, JSON.stringify( jsonInit ), "utf8");
        json = JSON.stringify( jsonInit )
    }
})

console.log('Орел или решка?')

input.on('line', (line) => {
    const hiddenNumber = randomInteger(0, 1)
    let hidden;
    if(line.toLowerCase() === 'орел') {
        hidden = 0
    } else if(line.toLowerCase() === 'решка') {
        hidden = 1
    } else {
        input.close()
        return console.log('Неверное значение')
    } 
    const jsonParse = JSON.parse(json)

    if(hiddenNumber === hidden) {
        ++jsonParse.winGame
        ++jsonParse.numberEagle
        console.log('Вы угадали')
        
    } else {
        ++jsonParse.loseGame
        ++jsonParse.numberTails
        console.log('Вы не угадали')
    }
    ++jsonParse.numberGame
    fs.writeFile(fileName, JSON.stringify( jsonParse ), "utf8");
    input.close()
})








// And then, to read it...
// myJson = require(fileName);



function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
