const mongoose = require('mongoose');
const { UserSchema } = require('../../Admin/UserSchema');

const NpcSchema = new mongoose.Schema({
    id: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true
    },
    name: {
        data: Buffer,
        contentType: String
    },
    type: mongoose.SchemaTypes.String,
    category: mongoose.SchemaTypes.String,
    description: mongoose.SchemaTypes.String,
    combatDifficulty: mongoose.SchemaTypes.Number,
    // inventory: [],
    // events: [],
    owner: UserSchema,
    permittedUsers: [UserSchema],
},{ timestamps: true })
const Npc = mongoose.models.Npc || mongoose.model('Npc', NpcSchema);

module.exports = Npc;