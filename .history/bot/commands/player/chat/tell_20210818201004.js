const { User, SlashCommandBuilder } = require('@discordjs/builders');
const sendChatMessage = require('../../../functions/sendChatMessage');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tell')
		.setDescription('Speak to other players at your location '),

	async execute(client, type, message) {
        const user = await User.findOne({username: message.username}, 
            (error, data) => {
                if(error) throw new Error(error);
            });
        sendChatMessage('tell', message.username, [user.discordId], message.content)
	},      
};