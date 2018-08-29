const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { adModel } = require('./adModel');



const messageSchema = new Schema({
    senderName: { type: String, required: true },
    senderEmail: { type: String, required: true },
    senderMessage: { type: String, required: true },
    adAuthor: { type: String, required: true },
    ad: [{ type: Schema.Types.ObjectId, ref: 'adModel' }],
    createdAt: { type: String, required: true },
 
});
let messageModel = mongoose.model('messageModel', messageSchema)

module.exports = { messageModel };