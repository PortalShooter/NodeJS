const express = require('express')
const router = express.Router()
const Book = require('../models/book');

router.get('/', async (req, res) => {
    const books = await Book.find();
    res.render('books/index', {
        title: 'Список книг',
        bookList: books,
    })
})

router.get('/create', (req, res) => {
    res.render('books/create', {
        title: 'Новая книга',
    })
})

router.post('/create', async (req, res) => {
    const {title, description, authors} = req.body

    const newBook = new Book({
        title, authors, description, id: new Date().toISOString().slice(0,19).replace(/-/g,'')
    });

    try {
        await newBook.save();
        res.redirect('/books')
    } catch (e) {
        console.error(e);
    }

})

router.post('/update/:id', async (req, res) => {
    const {id} = req.params
    const {title, authors, description} = req.body

    try {
        await Book.findOneAndUpdate({id}, {title, authors, description});
         res.redirect('/books')
    } catch (e) {
        console.error(e);
        res.render('error/404', {
            title: '404',
            description: 'Похоже такой книги у нас нет)',
        })
    }
})

router.get('/update/:id', async (req, res) => {
    const {id} = req.params
    const book = await Book.findOne({ id })

    if(book) {
        res.render('books/update', {
            title: book.title,
            book: book,
        })
    } else {
        res.render('error/404', {
            title: '404',
            description: 'Похоже такой книги у нас нет)',
        })
    }
    
})

router.get(':id', async (req, res, next) => {
  const repo = container.get(BooksRepository);
  const book = await repo.getBook(req.params.id);
  res.json(book);
})

// router.get('/:id', async (req, res) => {

//     const {id} = req.params
//     const book = await Book.findOne({ id })

//     if(book) {
//         res.render('books/view', {
//             title: book.title,
//             book: book,
//         })
        
//     } else {
//         res.render('error/404', {
//             title: '404',
//             description: 'Похоже такой книги у нас нет)',
//         })
//     }
// })

router.post('/delete/:id', async (req, res) => {
    const {id} = req.params;

    try {
        await Book.findOneAndDelete({ id });
        res.redirect('/books')
    } catch (e) {
        console.error(e);
        res.render('error/404', {
            title: '404',
            description: 'Похоже такой книги у нас нет)',
        })
    }
});

module.exports = router;
