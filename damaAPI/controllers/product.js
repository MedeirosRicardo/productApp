const mongoose = require('mongoose');
const Product = require('../models/product');

const page = 1;
const perPage = 5;

exports.productGetAll = (req, res) => {
    Product.find()
        .skip(page * perPage)
        .limit(perPage)
        .exec()
        .then(products => {
            res.status(200).json(products);
        })
        .catch(err => res.status(500).json({
            error: err
        }));
}