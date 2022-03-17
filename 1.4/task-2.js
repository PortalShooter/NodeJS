#!/usr/bin/env node
const path = require('path');
const fs = require('fs/promises');
fs.readdir(__dirname).then((dir) => {
    dir.forEach(item => {
        const extension = path.extname(item)
        if(extension === '.json') {
            fs.readFile(item, 'utf-8').then((file) => {
                const parseJson = JSON.parse(file)
                const percent = Math.round(parseJson.winGame / (parseJson.numberGame / 100 )) + '%';
                const percentEagle = Math.round(parseJson.numberEagle / (parseJson.numberGame / 100 )) + '%';
                const percentTails = Math.round(parseJson.numberTails / (parseJson.numberGame / 100 )) + '%';

                console.log('Общее количество партий:', parseJson.numberGame)
                console.log('Количество выигранных партий:', parseJson.winGame);
                console.log('Количество проигранных партий:', parseJson.loseGame);
                console.log('Процентное соотношение выигранных партий:', percent);
                console.log('Частота выпадения орла:', percentEagle);
                console.log('Частота выпадения решки:', percentTails);
            })
        }
    })
})