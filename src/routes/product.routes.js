const express = require('express');
const multer = require('multer');
const configStorage = require('../configs/uploads-file');

const router = express.Router();

const upload = configStorage(multer, '/product');

const productController = require('../app/controllers/ProductController');

router.get('/', productController.index);
router.post('/create', upload.single('thumbnail'), productController.create);

module.exports = router;
