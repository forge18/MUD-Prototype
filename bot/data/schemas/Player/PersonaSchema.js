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
    class: ClassSchema,
    stats: [StatSchema],
    abilities: [AbilitySchema],
    equipment: EquipmentSchema,
    inventory: [ObjectSchema],
})

module.exports = mongoose.model('Persona', PersonaSchema);