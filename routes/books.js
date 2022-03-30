const express = require('express')
const router = express.Router()
const fileMiddleware = require('../middleware/file')

const library = [
    {
        "title": "Мартин Иден",
        "description": "История о любви",
        "authors": "Джек Лондон",
        "favorite": "string",
        "fileCover": "string",
        "fileName": "string",
        "fileBook": "string",
        "id": "20220327"
    },
];

router.get('/', (req, res) => {
    res.json(library) 
    res.status(200)
})

router.post('/api/books', (req, res) => {
    const {body} = req

    body.id = new Date().toISOString().slice(0,10).replace(/-/g,'')
    library.push(body)

    res.status(201)
    res.json(body)
})

router.get('/api/books/:id', (req, res) => {
    const {id} = req.params
    const idx = library.findIndex(el => el.id === id)

    if(idx === -1) {
        res.status(404)
        res.send('Такой книги нет')
    } else {
        res.status(200)
        res.json(library[idx]) 
    }
})


// app.post('/upload',fileMiddleware.single('avatar') , (req, res) => {
//     try {
//         if(req.file) {
//             res.json(req.file)
//         }
//     } catch (error) {
//         console.log(error);
//     }
// })

router.get('/api/books/:id/download', fileMiddleware.single('book'), (req, res) => {
    // const {id} = req.params
    // const idx = library.findIndex(el => el.id === id)

    try {
        if(req.file) {
            res.json(req.file)
        }
    } catch (error) {
        console.log(error);
    }

    // if(idx === -1) {
    //     res.status(404)
    //     res.send('Такой книги нет')
    // } else {
    //     res.status(200)
    //     res.json(library[idx]) 
    // }
})

router.put('/api/books/:id', (req, res) => {
    const {id} = req.params
    const idx = library.findIndex(el => el.id === id)

    if(idx === -1) {
        res.status(404)
        res.send('Такой книги нет')
    } else {
        const {body} = req
        for(key in body) {
            library[idx][key] = body[key]
        }
        res.status(200)
        res.json(library[idx]) 
    }
})

router.delete('/api/books/:id', (req, res) => {
    const {id} = req.params
    const idx = library.findIndex(el => el.id === id)

    if(idx === -1) {
        res.status(404)
        res.send('Такой книги нет')
    } else {
        library.splice(idx, 1)

        res.status(200)
        res.send('Книга успешно удалена') 
    }
})

router.post('/api/user/login', (req, res) => {
    res.status(201)
    res.json({ id: 1, mail: "test@mail.ru" })
})

module.exports = router;