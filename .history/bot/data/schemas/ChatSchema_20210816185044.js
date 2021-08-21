const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    discordId: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true
    },
    username: mongooseSchemaTypes.String,
    messages: {

    }
    conversationType: mongoose.SchemaTypes.String, //say, tell, ooc, etc
})
const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;