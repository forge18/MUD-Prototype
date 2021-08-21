const mongoose = require('mongoose');

const ChatLogSchema = new mongoose.Schema({
    discordId: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true
    },
    username: mongooseSchemaTypes.String,
    messages: [MessageSchema],
})
const ChatLog = mongoose.models.ChatLog || mongoose.model('ChatLog', ChatLogSchema);

module.exports = ChatLog;