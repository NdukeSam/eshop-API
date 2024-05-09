// import { Schema, model } from "mongoose";
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    numberInStock: {
      type: Number,
      required: true
    }
  })
  
exports.Product = mongoose.model('Product', productSchema);