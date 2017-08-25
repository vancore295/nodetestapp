var mongoose = require('mongoose');
var Schema = mongoose.Schema;

shopitemScehma = new Schema({
    type: String,
    title: String,
    imageMain: String,
    imageAlt: String,
    price: Number
});

var shopItem = mongoose.model("shopItem", shopitemScehma);

module.exports = shopItem;