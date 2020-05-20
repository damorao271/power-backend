const mongoose = require("mongoose");
const Joi = require("joi");

// Schema of the Product
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
});

// Product Model
const Product = new mongoose.model("Product", productSchema);

// Function that validates the product input
function valitateProduct(product) {
  const schema = {
    name: Joi.string().min(0).required(),
    price: Joi.number().min(0).required(),
    quantity: Joi.number().min(0).required(),
  };

  return Joi.validate(product, schema);
}

module.exports.validate = valitateProduct;
module.exports.Product = Product;
