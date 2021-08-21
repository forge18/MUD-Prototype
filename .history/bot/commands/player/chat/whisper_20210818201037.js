const { User, SlashCommandBuilder } = require('@discordjs/builders');
const sendChatMessage = require('../../../functions/sendChatMessage');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('whisper')
		.setDescription('Send a message to the specified playern '),

	async execute(client, type, message) {
        const user = await User.findOne({username: message.username}, 
            (error, data) => {
                if(error) throw new Error(error);
            });
        sendChatMessage('whisper', message.username, [user.discordId], message.content);
	},      
};