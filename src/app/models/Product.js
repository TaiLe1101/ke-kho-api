const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    thumbnail: {
      type: String,
      default: '',
    },
    oldPrice: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', Product);
