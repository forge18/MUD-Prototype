const mongoose = require('mongoose');
// const PersonaSchema = require('./PersonaSchema');

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
    online: {
        type: mongoose.SchemaTypes.Boolean,
        default: false,
    },
    { timestamps: true }
})
const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;