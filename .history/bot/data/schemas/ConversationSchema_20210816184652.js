const mongoose = require('mongoose');
// const PersonaSchema = require('./PersonaSchema');

const UserSchema = new mongoose.Schema({
    conversationType: mongoose.SchemaTypes.String, //say, tell, ooc, etc
    discordId: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true
    },
    discordAvatar: {
        data: Buffer,
        contentType: String
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
},{ timestamps: true })
const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;