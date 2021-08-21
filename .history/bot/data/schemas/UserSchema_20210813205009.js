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
    joinedOn: mongoose.SchemaType.Date,
    lastLogin: {
        type: mongoose.SchemaTypes.Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('User', UserSchema);