const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    type: { type: String },
    family: { type: String, required: true },
    abv: { type: Number, required: true },
    ibu: { type: Number, required: true },
    malts: { type: [String], required: true },
    hops: { type: [String], required: true },
    medals: { type: [String] },
    imageBottle: { type: String, required: true },
    imageLogo: { type: String }
});

module.exports = productSchema;