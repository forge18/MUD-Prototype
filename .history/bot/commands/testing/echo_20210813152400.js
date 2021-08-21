const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Replies with your input!')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to echo back')
                .setRequired(true)
                .addChoice('Funny', 'gif_funny')
                .addChoice('Meme', 'gif_meme')
                .addChoice('Movie', 'gif_movie')),
	async execute(client, type, data) {
        const test = await data.fetchReply();
        console.log(test);
		await data.reply(test);
	},
};