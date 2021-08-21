const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('button')
		.setDescription('Replies with a button!')
    ,
	async execute(client, type, interaction) {
		await interaction.reply(data.options._hoistedOptions[0].value);
	}
};