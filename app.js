const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

require("dotenv/config");

//middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));

const api = process.env.API_URL;

mongoose
  .connect(process.env.COLLECTION_STRING)
  .then(() => {
    app.listen(3000, () => {
      console.log(api);
      console.log("Server running http://localhost:3000");
    });

    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
    // throw new Error('Database connection unsuccessful')
  });

app.get(`${api}/products`, (req, res) => {
  const product = {
    id: 1,
    name: "high-top sneakers",
    image: "some_url",
  };
  res.send(product);
});

app.post(`${api}/products`, (req, res) => {
  const newProduct = req.body;
  console.log(newProduct);
  res.send(newProduct);
});

// const func = () => {
//   return "hello";
// };

// func()

// function String(letters) {
//   this.letters = letters;
// }
