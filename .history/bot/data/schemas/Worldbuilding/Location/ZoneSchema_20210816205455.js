const type = require('mongoose').SchemaTypes;

const ZoneSchema = new mongoose.Schema({
    id: type.ObjectId,
    name: type.String,
    description: type.String,
    map: type.String,
    tags: [type.String],
    createdBy: type.String,
    lastUpdatedBy: type.String,
    active: type.Boolean,
},{ timestamps: true })
const Zone = mongoose.models.Zone || mongoose.model('Zone', ZoneSchema);

module.exports = Zone;