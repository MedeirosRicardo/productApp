const mongoose = require('mongoose');
const Product = require('../models/product');

const page = 1;
const perPage = 5;

exports.productGetAll = (req, res) => {
    Product.find()
        .skip((page - 1) * perPage)
        .limit(perPage)
        .then(products => {
            res.status(200).json(products);
        })
        .catch(err => res.status(500).json({
            error: err
        }));
}

exports.newProduct = (req, res) => {
    const product = new Product({
        title: req.body.title,
        description: req.body.description,
        type: req.body.type,
        family: req.body.family,
        abv: req.body.abv,
        ibu: req.body.ibu,
        malts: req.body.malts,
        hops: req.body.hops,
        medals: req.body.medals,
        imageBottle: req.body.imageBottle,
        imageLogo: req.body.imageLogo
    });

    product.save()
        .then(result => {
            res.status(201).json({
                message: "Created product succesfully"
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}