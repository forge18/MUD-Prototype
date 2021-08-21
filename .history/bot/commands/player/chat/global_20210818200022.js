const { UserManager, SlashCommandBuilder } = require('@discordjs/builders');
const sendChatMessage = require('../../../functions/sendChatMessage');
const getOnlineUsers = require('../../../functions/getOnlineUsers');



module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('Speak to other players at your location '),

	async execute(client, type, message) {
        const room = Room.findOne({ id: roomId }); 
        sendChatMessage('global', message.username, , message.content)
	},      
};