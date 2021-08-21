const mongoose = require('mongoose')

const PersonaSchema = new mongoose.Schema({
    username: mongoose.SchemaTypes.String,
    discordId: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true
    },
})

module.exports = mongoose.model('Persona', PersonaSchema);