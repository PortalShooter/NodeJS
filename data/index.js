const fs = require('fs');
const path = require('path');

if(process.env.FILENAME && process.env.FILETEXT) {
    fs.writeFile(process.env.FILENAME, process.env.FILETEXT, (err) => {
        if(err) throw err;
        console.log('File created');
    });
} else if(process.env.FILELIST) {
    fs.readdir(__dirname, (err, items) => {
        items.forEach(item => {
            const extension = path.extname(item)
            if(extension === '.txt') {
                fs.readFile(item, 'utf8', (err, data) => {
                    if(err) throw err;
                    console.log('Название файла:', item)
                    console.log('Содержимое файла:', data)
                });
            }
        })
        // for (let i=0; i<items.length; i++) {
        //     console.log(items[i]);
        // }
    })
}
