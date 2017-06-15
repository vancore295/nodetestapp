var mongoose = require('mongoose');
var Schema = mongoose.Schema;

menuitemScehma = new Schema({
    route: String,
    href: String,
    target: String,
    linkLabel: String,
    imageSource: String,
    dataToggle: String,
    dataPlacement: String,
    title: String,
    showImage: Boolean,
    showLabel: Boolean
});

var menuItem = mongoose.model("menuItem", menuitemScehma);

module.exports = menuItem;