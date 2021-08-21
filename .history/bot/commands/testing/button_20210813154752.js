const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('button')
		.setDescription('Replies with a button!')
    ,
	async execute(client, type, interaction) {
		const button = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Primary')
					.setStyle('PRIMARY'),
			);
            
        const dropdown = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					]),
			);

        const embed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Some title')
                .setURL('https://dioscord.js.org')
                .setDescription('Some description here');

		await interaction.reply({ content: 'Pong!', ephemeral: true, embeds: [embed], components: [dropdown, button] });
	}
};