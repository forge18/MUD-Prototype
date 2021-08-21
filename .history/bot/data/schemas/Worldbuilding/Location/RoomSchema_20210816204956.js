const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    roomId: mongoose.SchemaTypes.ObjectId,
    users: [mongoose.SchemaTypes.String],

},{ timestamps: true })
const Room = mongoose.models.Room || mongoose.model('Room', RoomSchema);

module.exports = User;