const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    users: [mongoose.SchemaTypes.String],
    rank: mongoose.SchemaTypes.String,
    // currentPersona: PersonSchema,
    // availablePersonas: [PersonaSchema],
    // imprints: [ObjectSchema],
    online: {
        type: mongoose.SchemaTypes.Boolean,
        default: false,
    },
},{ timestamps: true })
const Room = mongoose.models.Room || mongoose.model('Room', RoomSchema);

module.exports = User;