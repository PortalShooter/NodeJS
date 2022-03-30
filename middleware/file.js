const multer  = require('multer')
const upload = multer({ dest: '../public/books' })

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/books')
  },
  filename(req, file, cb) {
    cb(null, file.fieldname)
  }
})

const types = ['image/png', 'image/jpeg', 'image/jpg']

const fileFilter = (req, file, cd) => {

  console.log('file', file);

  if(types.includes(file.mimetype)) {
    cd(null, true)
  } else {
    cd(null, false)
  }
}

module.exports = multer({storage, fileFilter})