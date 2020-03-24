const multer = require('multer')


module.exports = (req, res, next) => {
  const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, 'users/upload/')
    },
    filename: function(req, file, callback){
        callback(null, file.originalname)
    }

  })
  const upload = multer({storage})
  next()
}
