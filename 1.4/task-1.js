#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv

const path = require('path');
const fs = require('fs/promises');

const fileName = argv._[0]

console.log(fileName);


const file = path.basename(fileName);


const content = 'Бум бада бум'
fs.readFile(file, 'utf-8').then((el) => {
    console.log(el);
}).catch(err => {
    if(err.code === 'ENOENT') {
        const dir = path.join(__dirname, `${file}.txt`)
        console.log('dir', __dirname);
        // fs.mkdir(dir, (err) => {
        //     if(err) console.log(555);
        // })
    }
    console.log(44,err);
})
// fs.appendFile(d, content).then(() => {
    
// })
