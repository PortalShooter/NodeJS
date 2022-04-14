const express = require('express')
const userRoutes = require('./routes/user');
const booksRoutesAPI = require('./routes/api/books');
const booksRoutes = require('./routes/books');

const redis = require('redis');


const PORT = process.env.PORT || 3000;
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost'

const client = redis.createClient({ url: REDIS_URL})
(async () => {
    await client.connect();
})();

const app = express()
const bodyParser = require('body-parser')

app.get('/:name', (req, res) => {
    const { name } = req.params
    try {
        const cnt = await client.incr(name)
        res.json({message: `Привет ${name} из конейнера! Счетчик = ${cnt}`})
    } catch (e) {
        console.log(e);
        res.status(500).json({errcode: 500, errmsg: 'Ошибка redis!!!'})
    }
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/user', userRoutes)
app.use('/api/books', booksRoutesAPI)
app.use('/books', booksRoutes)

app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`=== start server PORT ${PORT} ===`);
});
