import multer from 'multer';

const storage = multer.diskStorage({
  destination(req: any, file: any, cb: any) {
    cb(null, 'public/books')
  },
  filename(req: any, file: any, cb: any) {
    cb(null, file.originalname + new Date().toISOString())
  }
})

const types = ['application/epub+zip', 'text/plain', 'application/pdf']

const fileFilter = (req: any, file: any, cd: any) => {

  if(types.includes(file.mimetype)) {
    cd(null, true)
  } else {
    cd(null, false)
  }

}

module.exports = multer({storage, fileFilter})
