const express = require('express')

const app = express()
const PORT = process.env.PORT || 3001;


app.post('/counter/:bookId/incr', (req, res) => {
    console.log(123);
})

app.get('/counter/:bookId', (req, res) => {
    console.log(req.params);
    console.log(222);
})

app.get('/counter', (req, res) => {
    console.log(321);
})


app.listen(PORT, () => {
    console.log(`=== start server PORT ${PORT} ===`);
});