const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

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

        const embed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Some title')
                .setURL('https://dioscord.js.org')
                .setDescription('Some description here');

		await interaction.reply({ content: 'Pong!', ephemeral: true, embed: [embed], components: [row] });
	}
};