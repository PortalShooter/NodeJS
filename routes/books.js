const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json(library) 
    res.status(200)
})