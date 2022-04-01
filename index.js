const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

const booksRoutes = require('./routes/books');
app.use('/api/books', booksRoutes)

const userRoutes = require('./routes/user');
app.use('/api/user', userRoutes)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
