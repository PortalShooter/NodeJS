#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers');
const { log } = require('console');
const argv = yargs(hideBin(process.argv))
  .alias({
    'year': 'y',
    'month': 'm',
    'date': 'd'
  })
  .argv

const monthArr = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь',]

const command = argv._[0]

if(command === 'cmd') {
  const action = argv._[1]
  const date = new Date()
  const params = process.argv.slice(2).length > 2
  if(action === 'current') {
    if(!params) {
      console.log(date)
    } else {
      if(argv.year) {
        console.log('Текущий год:', date.getFullYear())
      } else if(argv.month) {
        console.log('Текущий месяц:', monthArr[date.getMonth()] + `(${date.getMonth() + 1})`)
      } else if(argv.date) {
        console.log('Текущий день:', date.getDate)
      }
    }
  } else if(action === 'add' && params) {
    if(argv.year) {
      date.setFullYear(date.getFullYear() + argv.year)
    } else if(argv.month) {
      date.setMonth(date.getMonth() + argv.month)
    } else if(argv.date) {
      date.setDate(date.getDate() + argv.date)
    }
    console.log(date)
  } else if(action === 'sub' && params) {
    if(argv.year) {
      date.setFullYear(date.getFullYear() - argv.year)
    } else if(argv.month) {
      date.setMonth(date.getMonth() - argv.month)
    } else if(argv.date) {
      date.setDate(date.getDate() - argv.date)
    }
    console.log(date)
  }
}