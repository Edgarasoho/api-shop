const Product = require("../models/productModel");

// GET /product
async function getAllProducts() {
  const data = await Product.find();
  return data;
}

module.exports = getAllProducts;
