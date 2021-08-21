const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('button')
		.setDescription('Replies with a button!')
    ,
	async execute(client, type, interaction) {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Primary')
					.setStyle('PRIMARY'),
			);

		await interaction.reply({ content: 'Pong!', components: [row] });
	}
};