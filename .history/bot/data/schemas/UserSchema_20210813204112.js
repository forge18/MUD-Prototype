const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    discordId: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true
    },
    username: mongoose.SchemaTypes.String,
})

module.exports = mongoose.model('User', UserSchema);