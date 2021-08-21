const { SlashCommandBuilder } = require('@discordjs/builders');
const { User } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('connect')
		.setDescription('Connect to the game'),
	async execute(client, type, interaction) {
        const currentUser = await User.findById(message.author.id).execute();

		await interaction.reply('You have successfully connected. Welcome to "The Hub"! ');
	},
};