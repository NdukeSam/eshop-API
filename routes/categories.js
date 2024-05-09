const {Category} = require('../models/category');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) => {
    const catergoriesList = await Category.find();

    if (!catergoriesList) {
        res.status(500).json({success: false})
    }

    res.send(catergoriesList);
})

module.exports = router;