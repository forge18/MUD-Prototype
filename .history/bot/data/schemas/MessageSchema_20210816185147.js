const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    conversationType: mongoose.SchemaTypes.String, //say, tell, ooc, etc
    recipient: mongoose.SchemaTypes.
    persona: mongoose.SchemaTypes.String,
    messages: {
        
    }
    
})
const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;