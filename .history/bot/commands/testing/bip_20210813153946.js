const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bip')
		.setDescription('Replies with Bop!'),
	async execute(client, type, message) {
		await message.reply('Bop!');
	},
};