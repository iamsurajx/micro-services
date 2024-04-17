const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  }
}, { timestamp: true });


// model created
const Product = new mongoose.model('product', productSchema);

//exporting the model
module.exports = Product;