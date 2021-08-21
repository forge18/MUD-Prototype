const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('beep')
		.setDescription('Replies with Boop!'),
	async execute(client, message) {
		await message.reply('Boop!');
	},
};