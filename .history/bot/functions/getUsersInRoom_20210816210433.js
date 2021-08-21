const { UserManager } = require('discord.js'); 
const Room = require('../data/schemas/Worldbuilding/Location/RoomSchema')

module.exports = function(roomId) 
{
    const room = Room.findOne({ id: roomId });
    room.users.forEach((user, index) => {
        UserManager

    return embed;
}