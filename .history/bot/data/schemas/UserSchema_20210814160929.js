const mongoose = require('mongoose');
// const PersonaSchema = require('./PersonaSchema');

User

const UserSchema = new mongoose.Schema({
    discordId: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    username: mongoose.SchemaTypes.String,
    rank: mongoose.SchemaTypes.String,
    // currentPersona: PersonSchema,
    // availablePersonas: [PersonaSchema],
    // imprints: [ObjectSchema],
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

function renameCreatorField() {
    UserSchema.update({}, { $rename: { "creator" : "user" } }, { multi: true }, function(err, data) {
        if (!err) { 
            //success 
        }
    })
}

module.exports = mongoose.models.Users || mongoose.model('User', UserSchema);