const express = require('express');
const redis = require('redis');

const PORT = process.env.PORT || 3000;
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost';

const client = redis.createClient({ url: REDIS_URL });

(async () => {
    await client.connect();
})();

const app = express();

function incrementViewBook() {
    const cnt = await client.incr(bookId);
}

app.get('/:bookId', async   (req, res) => {
    const {bookId} = req.params
    
    try {
        const cnt = await client.incr(bookId);
        res.json({ message: `Привет ${bookId} из контейнера! Счетчик = ${cnt}`});
    } catch (e) {
        console.log(e);
        res.status(500).json({errcode: 500, errmsg: 'Ошибка redis!!!'});
    }
})

app.post('/:bookId/incr', async   (req, res) => {
    const {bookId} = req.params
    
    try {
        const cnt = await client.incr(bookId);
        res.json({ message: `Привет ${bookId} из контейнера! Счетчик = ${cnt}`});
    } catch (e) {
        console.log(e);
        res.status(500).json({errcode: 500, errmsg: 'Ошибка redis!!!'});
    }

})

app.listen(PORT, () => {
    console.log(`Server is listeninng on port ${PORT}`);
})
