const { SlashCommandBuilder } = require('@discordjs/builders');
const { User } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('connect')
		.setDescription('Connect to the game'),
	async execute(client, type, interaction) {
        await User.findByOneAndUpdate(message.author.id, {online: true}, {upsert: true}, )});

		await interaction.reply('You have successfully connected. Welcome to "The Hub"! ');
	},
};