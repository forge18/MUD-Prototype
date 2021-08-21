const mongoose = require('mongoose')

const PersonaSchema = new mongoose.Schema({
    discordId: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true
    },
    name: mongoose.SchemaTypes.String,
    aliases: [mongoose.SchemaTypes.String],
    titles: [mongoose.SchemaTypes.String],
    gender: mongoose.SchemaTypes.String,
    
})

module.exports = mongoose.model('Persona', PersonaSchema);