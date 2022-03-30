const express = require('express')
const router = express.Router()
const app = express()
const port = 3000

const library = [
    {
        "title": "Мартин Иден",
        "description": "История о любви",
        "authors": "Джек Лондон",
        "favorite": "string",
        "fileCover": "string",
        "fileName": "string",
        "id": "20220327"
    },
];

// const indexRoutes = require('./routes/index');
const booksRoutes = require('./routes/books');


// app.use('/', indexRoutes)
app.use('/api/books', booksRoutes)

const bodyParser = require('body-parser')

app.use(bodyParser.json())

// app.get('/api/books', (req, res) => {
//     res.json(library) 
//     res.status(200)
// })
    



// app.post('/api/books', (req, res) => {
//     const {body} = req

//     body.id = new Date().toISOString().slice(0,10).replace(/-/g,'')
//     library.push(body)

//     res.status(201)
//     res.json(body)
// })

// app.get('/api/books/:id', (req, res) => {
//     const {id} = req.params
//     const idx = library.findIndex(el => el.id === id)

//     if(idx === -1) {
//         res.status(404)
//         res.send('Такой книги нет')
//     } else {
//         res.status(200)
//         res.json(library[idx]) 
//     }
// })

// app.put('/api/books/:id', (req, res) => {
//     const {id} = req.params
//     const idx = library.findIndex(el => el.id === id)

//     if(idx === -1) {
//         res.status(404)
//         res.send('Такой книги нет')
//     } else {
//         const {body} = req
//         for(key in body) {
//             library[idx][key] = body[key]
//         }

//         res.status(200)
//         res.json(library[idx]) 
//     }
// })

// app.delete('/api/books/:id', (req, res) => {
//     const {id} = req.params
//     const idx = library.findIndex(el => el.id === id)

//     if(idx === -1) {
//         res.status(404)
//         res.send('Такой книги нет')
//     } else {
//         library.splice(idx, 1)

//         res.status(200)
//         res.send('Книга успешно удалена') 
//     }
// })

// app.post('/api/user/login', (req, res) => {
//     res.status(201)
//     res.json({ id: 1, mail: "test@mail.ru" })
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})