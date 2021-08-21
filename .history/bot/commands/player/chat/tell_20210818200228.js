const { UserManager, SlashCommandBuilder } = require('@discordjs/builders');
const sendChatMessage = require('../../../functions/sendChatMessage');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tell')
		.setDescription('Speak to other players at your location '),

	async execute(client, type, message) {
        const userDiscordId = Room.findOne({ id: roomId }); 
        sendChatMessage('tell', message.username, [], message.content)
	},      
};