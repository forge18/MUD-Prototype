const type = require('mongoose').SchemaTypes;

const RoomSchema = new mongoose.Schema({
    id: type.ObjectId,
    name: type.String,
    description: type.String,
    maps: [type.String],
    actors: [ActorSchema],
    objects: [ObjectSchema],
    users: [type.String],
    createdBy: type.String,
    lastUpdatedBy: type.String,
    active: type.Boolean,
},{ timestamps: true })
const Room = mongoose.models.Room || mongoose.model('Room', RoomSchema);

module.exports = Room;