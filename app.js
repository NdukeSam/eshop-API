const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

require("dotenv/config");
const api = process.env.API_URL;

//middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));

//Routers
const categoriesRoutes = require('./routes/categories');
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');
const ordersRoutes = require('./routes/orders');

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);



// app.use(`${api}/products`, productsRouter)


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


