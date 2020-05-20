const express = require("express");
const mongoose = require("mongoose");
const products = require("./routes/products");
const app = express();

mongoose
  .connect("mongodb://localhost/power")
  .then(() => console.log("Coneted to MongoDB ..."))
  .catch((err) => console.error("Could not connect to MongoDB !!!"));

app.use(express.json());
app.use("/api/products", products);

const port = 3900;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
