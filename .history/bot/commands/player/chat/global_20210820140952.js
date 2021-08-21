const { UserManager, SlashCommandBuilder } = require('@discordjs/builders');
const sendChatMessage = require('../../../functions/sendChatMessage');
const getOnlineUsers = require('../../../functions/getOnlineUsers');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('global')
		.setDescription('Speak to all players that are logged in. '),

	async execute(client, type, message) {
        const onlineUsers = getOnlineUsers()
        sendChatMessage('global', message.username, onlineUsers, message)
	},      
};