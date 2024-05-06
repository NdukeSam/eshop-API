const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

const productsRouter = require("./routers/products")
const api = process.env.API_URL;
require("dotenv/config");

//middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));

//Routers
app.use(`${api}/products`, productsRouter)


mongoose.connect(process.env.COLLECTION_STRING)
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

// const func = () => {
//   return "hello";
// };

// func()

// function String(letters) {
//   this.letters = letters;
// }
