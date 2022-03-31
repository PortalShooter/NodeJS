const multer  = require('multer')

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/books')
  },
  filename(req, file, cb) {
    cb(null, file.originalname + new Date().toISOString())
  }
})

const types = ['application/epub+zip', 'text/plain', 'application/pdf']

const fileFilter = (req, file, cd) => {

  if(types.includes(file.mimetype)) {
    cd(null, true)
  } else {
    cd(null, false)
  }

}

module.exports = multer({storage, fileFilter})
