const mongoose = require('mongoose');
const PersonaSchema = require('./PersonaSchema');

const UserSchema = new mongoose.Schema({
    discordId: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true
    },
    username: mongoose.SchemaTypes.String,
    rank: mongoose.SchemaTypes.String,
    currentPersona: PersonSchema,
    availablePersonas: [PersonaSchema],
    imprints: [ObjectSchema],
    joinedOn: {
        type: mongoose.SchemaTypes.Date,
        default: Date.now,
    },  
    lastLogin: {
        type: mongoose.SchemaTypes.Date,
        default: Date.now,
    },  
    online: {
        type: mongoose.SchemaTypes.Boolean,
        default: false,
    }
})
const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;