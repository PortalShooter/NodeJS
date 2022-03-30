const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: '../public/books' })

const app = express()

const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, function (req, res, next) {
  // req.files - объект (String -> Array), где fieldname - ключ, и значение - массив файлов
  //
  // например:
  //  req.files['avatar'][0] -> File
  //  req.files['gallery'] -> Array
  //
  // req.body сохранит текстовые поля, если они будут
})