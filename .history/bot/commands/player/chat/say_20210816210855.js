const { UserManager, SlashCommandBuilder } = require('@discordjs/builders');
var dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')

dayjs.extend(relativeTime)

const User = require('../../../data/schemas/Admin/UserSchema');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('Speak to other players at your location '),
	async execute(client, type, interaction) {
        const users = getUsersInRoom(roomId)
        users.forEach((user, index) => {
            const messageRecipient = UserManager.fetch(user.discordId);
            messageRecipient.send()
        });
        User.setDescription()
        await interaction.editReply({ content: 'test', ephemeral: true, embeds: [embed]});
	},
};