const mongoose = require ('mongoose');
const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        required: true
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type: [String],
        default: []
    },
    sales: {
        type: Number,
        default: 0
    },
})
//hola, this is a testing comment
const Menu = mongoose.model('Menu', menuItemSchema);
module.exports = Menu;