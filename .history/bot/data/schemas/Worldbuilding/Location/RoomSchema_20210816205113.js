const type = require('mongoose').SchemaTypes;

const RoomSchema = new mongoose.Schema({
    roomId: type.ObjectId,
    roomName: type.String,
    users: [type.String],

},{ timestamps: true })
const Room = mongoose.models.Room || mongoose.model('Room', RoomSchema);

module.exports = User;