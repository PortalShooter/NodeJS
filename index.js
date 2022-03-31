const express = require('express')
const userRoutes = require('./routes/user');
const booksRoutes = require('./routes/books');

const app = express()
const port = 3000

app.use('/api/user', userRoutes)
app.use('/api/books', booksRoutes)

app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
