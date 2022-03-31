const express = require('express')
const app = express()
const port = 3000

const booksRoutes = require('./routes/books');
app.use('/api/books', booksRoutes)

const userRoutes = require('./routes/user');
app.use('/api/user', userRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
