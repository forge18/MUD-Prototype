const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('button')
		.setDescription('Replies with a button!')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to echo back')
                .setRequired(true)
                .addChoice('Funny', 'gif_funny')
                .addChoice('Meme', 'gif_meme')
                .addChoice('Movie', 'gif_movie')),
	async execute(client, type, interaction) {
		await interaction.reply(data.options._hoistedOptions[0].value);
	},
};