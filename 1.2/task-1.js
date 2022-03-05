#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

if (argv.ships > 3 && argv.distance < 53.5) {
  console.log('Plunder more riffiwobbles!')
} else {
  console.log('Retreat from the xupptumblers!')
  console.log(argv.ships)
}

// console.log('argv', argv);

// const command = process.argv.slice(2)

// if(command[0] === '-year' || command[1] === '--year') {
//   console.log(new Date().getFullYear)
// }
// console.log(command);
// console.log(command[0], command[1])



// const sum = nums.reduce((acc, cur) => acc + cur, 0)

// console.log('Сумма', sum);
