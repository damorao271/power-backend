const { Product, validate } = require("../models/productModel");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) res.status(400).send(error.details[0].message);

  // const genre = await Genre.findById(req.body.genreId);
  // if (!genre) return res.status(400).send("Invalid genre.");

  let product = new Product({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
  });

  product = await product.save();

  res.send(product);
});

module.exports = router;
