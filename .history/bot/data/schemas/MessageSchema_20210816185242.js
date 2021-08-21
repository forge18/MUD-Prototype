const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    conversationType: mongoose.SchemaTypes.String, //say, tell, ooc, etc
    recipient: mongoose.SchemaTypes.String,
    persona: mongoose.SchemaTypes.String,
    message: mongoose.SchemaTypes.String,
    timestamp: Date.now()
})
const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;