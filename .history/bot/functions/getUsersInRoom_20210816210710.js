const Room = require('../data/schemas/Worldbuilding/Location/RoomSchema')

module.exports = function(roomId, message) 
{
    const room = Room.findOne({ id: roomId });  
    return room.users;
}