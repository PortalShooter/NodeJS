const express = require('express')
const app = express()
const port = 3000

const rl = require('readline')
const input = rl.createInterface(process.stdin, process.stdout);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})