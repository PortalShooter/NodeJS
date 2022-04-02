const express = require('express')
const userRoutes = require('./routes/user');
const booksRoutesAPI = require('./routes/api/books');
const booksRoutes = require('./routes/books');

const app = express()
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/user', userRoutes)
app.use('/api/books', booksRoutesAPI)
app.use('/books', booksRoutes)

app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`=== start server PORT ${PORT} ===`);
});
