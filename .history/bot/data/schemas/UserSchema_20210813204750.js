const mongoose = require('mongoose');
const PersonaSchema = require('./PersonaSchema');

const UserSchema = new mongoose.Schema({
    discordId: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true
    },
    username: mongoose.SchemaTypes.String,
    personas: [PersonaSchema],
    lastLogin: mongoose.SchemaTypes.Date
})

module.exports = mongoose.model('User', UserSchema);