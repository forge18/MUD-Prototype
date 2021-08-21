const { SlashCommandBuilder } = require('@discordjs/builders');
const { User } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('connect')
		.setDescription('Connect to the game'),
	async execute(client, type, interaction) {
        const notes = await User.find({discordId: message.author.id});
 			let description = '';
 			for (const i in notes) {
 				description += `${parseInt(i) + 1}) ${notes[i].description}\n`;
 			}
 			message.channel.send(description);
		await interaction.reply(interaction.options._hoistedOptions[0].value);
	},
};