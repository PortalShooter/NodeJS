const express = require('express')
const app = express()
const port = 3000

const booksRoutes = require('./routes/books');
app.use('/api/books', booksRoutes)

const bodyParser = require('body-parser')
app.use(bodyParser.json())


const fileMiddleware = require('./middleware/file')

app.post('/upload', fileMiddleware.single('avatar'), (req, res) => {
    try {
        if(req.file) {
            res.json(req.file)
        }
    } catch (error) {
        console.log(error);
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})