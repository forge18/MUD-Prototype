const Room = require('../data/schemas/Worldbuilding/Location/RoomSchema')

module.exports = function(roomID) 
{
    const room = Room.findOne({ id: roomID });
    room.users.forEach((user, index) => {
        user.discordId
    });

    return embed;
}