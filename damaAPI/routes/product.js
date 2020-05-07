const express = require('express');
const ProductController = require('../controllers/product');

const router = express.Router();

router.get('/', ProductController.productGetAll);
router.post('/', ProductController.newProduct);

module.exports = router;