const fs = require('fs');

function configStorage(multer, path = '/other') {
  const customPath = 'src/public/uploads' + path;
  const dirNameSlice = customPath.split('/');

  fs.mkdirSync(customPath, {
    recursive: true,
  });

  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, customPath);
    },
    filename: function (req, file, cb) {
      const originalNameFile = file.originalname.split('.');

      cb(null, dirNameSlice[dirNameSlice.length - 1] + '-' + file.fieldname + '-' + Date.now() + '.' + originalNameFile[1]);
    },
  });

  return multer({ dest: customPath, storage });
}

module.exports = configStorage;
