const mongoose = require('mongoose');
// const PersonaSchema = require('./PersonaSchema');

const UserSchema = new mongoose.Schema({
    discordId: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true
    },
    
},{ timestamps: true })
const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;