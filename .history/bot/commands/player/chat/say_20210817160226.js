const { UserManager, SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('Speak to other players at your location '),

	async execute(client, type, message) {
        const room = Room.findOne({ id: roomId }); 
        users.forEach((room.users, index) => {
            const messageRecipient = UserManager.fetch(user.discordId);
            messageRecipient.send(message.username + ' says "' + message.content + '"')
                .catch(message.reply('*Unable to send last message.*'));
        });
	},      
};