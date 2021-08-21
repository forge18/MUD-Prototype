const type = require('mongoose').SchemaTypes;
const RoomSchema = require('./RoomSchema');


const ZoneSchema = new mongoose.Schema({
    id: type.ObjectId,
    name: type.String,
    description: type.String,
    map: type.String,
    tags: [type.String],
    rooms: [RoomSchema],
    createdBy: type.String,
    lastUpdatedBy: type.String,
},{ timestamps: true })
const Zone = mongoose.models.Zone || mongoose.model('Zone', ZoneSchema);

module.exports = Zone;