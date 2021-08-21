const type = require('mongoose').SchemaTypes;

const RoomSchema = new mongoose.Schema({
    id: type.ObjectId,
    name: type.String,
    description: type.String,
    actors: [ActorSchema],
    objects: [ObjectSchema],
    users: [type.String],

},{ timestamps: true })
const Room = mongoose.models.Room || mongoose.model('Room', RoomSchema);

module.exports = User;