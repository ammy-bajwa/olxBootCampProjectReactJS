const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const adSchema = new Schema({
    adTitle: { type: String, required: true },
    itemCondition: { type: String, required: true },
    itemPic: { type: String, required: true },
    price: { type: Number, required: true },
    city: { type: String, required: true },
    itemDetails: { type: String, required: true },
    status: { type: String, required: true },
    catogary: { type: String, required: true },
    subCatogary: { type: String, required: true },
    user: { type: String, required: true },
    createdAt: { type: String, required: true }
});
adSchema.index( { adTitle: "text", itemDetails: "text" } )
let adModel = mongoose.model('adModel', adSchema)

module.exports = { adModel };