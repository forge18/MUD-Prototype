const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('beep')
		.setDescription('Replies with Boop!'),
	async execute(client, type, message, args) {
		await message.reply('Boop!');
	},
};