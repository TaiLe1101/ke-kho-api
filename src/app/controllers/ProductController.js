const Product = require('../models/Product');
var multer = require('multer');

class ProductController {
  async index(req, res) {
    const data = await Product.find().all();

    return res.json({
      status: 200,
      error: false,
      message: 'Get Success',
      data: data,
    });
  }

  async create(req, res) {
    const file = await req.file;
    let urlFile = '';

    if (!file) {
      urlFile = process.env.HOST + '/err';
    } else {
      const filePathSlice = file.path.split('\\');
      const pathArr = filePathSlice.splice(2);
      let path = '';

      pathArr.forEach((pathItem) => {
        path += '/' + pathItem;
      });

      if (process.env.ENV === 'development') {
        urlFile = process.env.HOST + ':' + process.env.PORT + path;
      } else {
        urlFile = process.env.HOST + path;
      }
    }

    const newProduct = new Product({
      name: req.body.name,
      desc: req.body.desc,
      thumbnail: urlFile,
      price: req.body.price,
      oldPrice: req.body.oldPrice,
    });

    await newProduct.save();

    const data = await Product.find().all();

    return res.json({
      status: 200,
      error: false,
      message: 'Get Success',
      data: data,
    });
  }
}

module.exports = new ProductController();
