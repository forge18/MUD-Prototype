const { UserManager, SlashCommandBuilder } = require('@discordjs/builders');
const sendChatMessage = require('../../../functions/sendChatMessage');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('group')
		.setDescription('Speak to other players in your group. '),

	async execute(client, type, message) {
        const room = Room.findOne({ id: roomId }); 
        sendChatMessage('group', message.username, [], message.content)
	},      
};