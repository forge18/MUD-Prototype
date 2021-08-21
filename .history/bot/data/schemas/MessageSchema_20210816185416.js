const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    conversationType: mongoose.SchemaTypes.String, //say, tell, ooc, etc
    recipient: mongoose.SchemaTypes.String,
    persona: mongoose.SchemaTypes.String,
    message: mongoose.SchemaTypes.String,
    timestamp: Date.now()
})
const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema);

module.exports = Message;