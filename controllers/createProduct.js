const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: String,
});

const Product = mongoose.model("Product", productSchema);

async function createProduct(props) {
  console.log(props);

  const response = await Product.create({
    title: "test",
    description: "test",
    img: "https://source.unsplash.com/600x400/?banana",
  });
  return response;
}

module.exports = createProduct;
