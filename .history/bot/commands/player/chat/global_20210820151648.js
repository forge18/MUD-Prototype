const { UserManager, SlashCommandBuilder } = require('@discordjs/builders');
const sendChatMessage = require('../../../functions/sendChatMessage');
const getOnlineUsers = require('../../../functions/getOnlineUsers');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('global')
		.setDescription('Speak to all players that are logged in. ')
        .addStringOption(option =>
            option.setName('message')
                .setDescription('Text that should be sent.')
                .setRequired(true)),

	async execute(client, type, interaction) {
        const onlineUsers = await getOnlineUsers();
        sendChatMessage(client, 'global', interaction.user, onlineUsers, interaction)
	},      
};