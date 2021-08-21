const Room = require('../data/schemas/Worldbuilding/Location/RoomSchema')

module.exports = function(roomID) 
{
    const room = Room.findOne({ roomID: roomID });
    room.users.forEach((item, index) => {

    });

    return embed;
}