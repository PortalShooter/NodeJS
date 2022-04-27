const express = require('express')
const mongoose = require('mongoose');

const userRoutes = require('./routes/user');
const booksRoutesAPI = require('./routes/api/books');
const booksRoutes = require('./routes/books');

const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/user', userRoutes)
app.use('/api/books', booksRoutesAPI)
app.use('/books', booksRoutes)

app.get('/', (req, res) => {
    res.redirect('/books')
})

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;
const UserDB = process.env.DB_USERNAME || 'root';
const PasswordDB = process.env.DB_PASSWORD || 'qwerty12345';
const NameDB = process.env.DB_NAME || 'books';
const HostDb = process.env.DB_HOST || 'mongodb://localhost:27017/';

(async () => {

    mongoose.connect(HostDb, {
        user: UserDB,
        pass: PasswordDB,
        dbName: NameDB,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        app.listen(PORT, () => {
            console.log(`=== start server PORT ${PORT} ===`);
        });
    })
    .catch ((e) => {
        console.log('Error', e);
    })

})();


