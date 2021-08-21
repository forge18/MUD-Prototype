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
    // currentPersona: PersonSchema,
    // availablePersonas: [PersonaSchema],
    // imprints: [ObjectSchema],
    joinedOn: mongoose.SchemaType.Date,
    lastLogin: {
        type: mongoose.SchemaTypes.Date,
        default: Date.now,
    },  
    online: mongoose.SchemaTypes.Boolean,
})

module.exports = mongoose.model('User', UserSchema);