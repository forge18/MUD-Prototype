const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bip')
		.setDescription('Replies with Bop!'),
	async execute(interaction) {
		await interaction.reply('Bop!');
	},
};