const express = require('express')
const router = express.Router()
const fileMiddleware = require('../../middleware/file')

const bodyParser = require('body-parser')
router.use(bodyParser.json())

const library = [
    {
        "title": "Мартин Иден",
        "description": "История о любви",
        "authors": "Джек Лондон",
        "favorite": "string",
        "fileCover": "string",
        "fileName": "martin_iden.epub2022-03-31T13:08:36.212Z",
        "fileBook": "public/books/martin_iden.epub2022-03-31T13:08:36.212Z",
        "id": "20220327"
    },
];

router.get('/', (req, res) => {
    res.json(library)
    res.status(200)
})

router.post('/', (req, res) => {
    const {body} = req

    body.id = new Date().toISOString().slice(0,10).replace(/-/g,'')
    library.push(body)

    res.status(201)
    res.json(body)

    console.log(library)
})

router.get('/:id', (req, res) => {
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

router.post('/:id/upload',fileMiddleware.single('book') , (req, res) => {
    try {
        const {file} = req
        if(file) {
            const {id} = req.params
            const idx = library.findIndex(el => el.id === id)

            if(idx === -1) {
                res.status(404)
                res.send('Такой книги нет')
            } else {
                library[idx].fileName = file.originalname
                library[idx].fileBook = file.path

                res.status(200)
                res.json(library[idx])
            }
        }
    } catch (error) {
        console.log(error);
    }
})

router.get('/:id/download', fileMiddleware.single('book'), (req, res) => {
    const {id} = req.params
    const idx = library.findIndex(el => el.id === id)

    if(idx === -1) {
        res.status(404)
        res.send('Такой книги нет')
    } else {
        res.status(200)
        res.download(library[idx].fileBook)
    }
})

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
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



module.exports = router;