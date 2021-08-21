const type = require('mongoose').SchemaTypes;
const ZoneSchema = require('./ZoneSchema');

const WorldSchema = new mongoose.Schema({
    id: type.ObjectId,
    name: type.String,
    description: type.String,
    map: type.String,
    tags: [type.String],
    zones: [ZoneSchema],
    createdBy: type.String,
    lastUpdatedBy: type.String,
},{ timestamps: true })
const World = mongoose.models.World || mongoose.model('World', WorldSchema);

module.exports = World;