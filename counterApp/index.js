const express = require('express');
const redis = require('redis');

const PORT = process.env.PORT || 3002;
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost';

const client = redis.createClient({ url: REDIS_URL });

console.log('REDIS_URL', REDIS_URL);
console.log('client', client);

(async () => {
    await client.connect();
})();

const app = express();

app.get('/counter/:bookId', async   (req, res) => {
    const {bookId} = req.params
    const cnt = await client.get(bookId);

    try {    
        res.status(200).json({count: cnt})
    } catch (e) {
        console.log(e);
        res.status(500).json({errcode: 500, errmsg: 'Ошибка redis!!!'});
    }
    
})

app.post('/counter/:bookId/incr', async   (req, res) => {
    const {bookId} = req.params
    const cnt = await client.incr(bookId);

    try {
        res.status(200).json({count: cnt})
    } catch (e) {
        console.log(e);
        res.status(500).json({errcode: 500, errmsg: 'Ошибка redis!!!'});
    }

})

app.listen(PORT, () => {
    console.log(`Server is listeninng on port ${PORT}`);
})
