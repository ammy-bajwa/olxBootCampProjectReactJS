const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { AdModel } = require('./adModel');



const userSchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contact: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    token: { type: String, required: true },
    createdAt: { type: String, required: true }
});

let userModel = mongoose.model('userModel', userSchema)

module.exports = { userModel };