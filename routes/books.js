const express = require('express')
const router = express.Router()

const library = [
    {
        "title": "Мартин Иден",
        "description": "Юный моряк и выходец из низов Мартин Иден случайно знакомится с девушкой из состоятельной семьи Руфью Морз. Влюбившись с первого взгляда и попав под обаяние высшего света, Мартин решает стать достойным своей избранницы. Отныне его жизнь будет посвящена тому, чтобы реализовать пробудившийся писательский дар, добиться славы и руки любимой женщины",
        "authors": "Джек Лондон",
        "favorite": "string",
        "fileCover": "string",
        "fileName": "martin_iden.epub2022-03-31T13:08:36.212Z",
        "fileBook": "public/books/martin_iden.epub2022-03-31T13:08:36.212Z",
        "id": "20220327"
    },
];

router.get('/', (req, res) => {
    res.render('books/index', {
        title: 'Список книг',
        bookList: library,
    })
})

router.get('/create', (req, res) => {
    res.render('books/create', {
        title: 'Новая книга',
    })
})

router.post('/create', (req, res) => {
    const {title, desc, author} = req.body
    library.push(
        {
            "title": title,
            "description": desc,
            "authors":author ,
            "fileName": "martin_iden.epub2022-03-31T13:08:36.212Z",
            "fileBook": "public/books/martin_iden.epub2022-03-31T13:08:36.212Z",
            "id": new Date().toISOString().slice(0,15).replace(/-/g,'')
        }
    )
    res.redirect('/books')
})

router.post('/update/:id', (req, res) => {
    const {id} = req.params
    const idx = library.findIndex(el => el.id === id);

    if(idx === -1) {
        res.render('error/404', {
            title: '404',
            description: 'Похоже такой книги у нас нет)',
        })
    } else {
        const {title, author, desc} = req.body
        library[idx].title = title
        library[idx].authors = author
        library[idx].description = desc
        res.redirect('/books')
    }
})

router.get('/update/:id', (req, res) => {
    const {id} = req.params
    const idx = library.findIndex(el => el.id === id);

    if(idx === -1) {
        res.render('error/404', {
            title: '404',
            description: 'Похоже такой книги у нас нет)',
        })
    } else {
        res.render('books/update', {
            title: library[idx].title,
            book: library[idx],
        })
    }
    
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    const idx = library.findIndex(el => el.id === id);

    if(idx === -1) {
        res.render('error/404', {
            title: '404',
            description: 'Похоже такой книги у нас нет)',
        })
    } else {
        res.render('books/view', {
            title: library[idx].title,
            book: library[idx],
        })
    }
})

module.exports = router;
