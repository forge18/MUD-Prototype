const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('author')
		.setDescription('A tool for narrators to build out their worlds. '),
    async execute(client, type, interaction) {    

        const embed = new MessageEmbed()
            .setColor('0x689f40')
            .setTitle('Author Mode')
            .setDescription('What would you like to work on?')
            .setImage('https://i.stack.imgur.com/Fzh0w.png');

        const locationsEmoji = client.emojis.find(emoji => emoji.name === "map") 
        const charactersEmoji = client.emojis.find(emoji => emoji.name === "map") 
        const objectsEmoji = client.emojis.find(emoji => emoji.name === "map") 
                
        const buttons = new MessageActionRow()
			.addComponents(
				new MessageButton()
                    .setStyle('SECONDARY')
					.setCustomId('locations')
					.setLabel('Locations')
					.setEmoji(locationsEmoji)
			)
			.addComponents(
				new MessageButton()
                    .setStyle('SECONDARY')
					.setCustomId('characters')
					.setLabel('Characters')
					.setEmoji(charactersEmoji)
			)
            .addComponents(
				new MessageButton()
                    .setStyle('SECONDARY')
					.setCustomId('objects')
					.setLabel('Objects')
					.setEmoji(objectsEmoji)
			);   

        await interaction.reply({ 
            embeds: [embed], 
            components: [buttons] 
        });
    }
}

