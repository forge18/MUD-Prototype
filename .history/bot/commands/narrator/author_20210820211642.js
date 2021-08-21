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
            .setDescription('What would you like to work on?');
                
        const buttons = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('locations')
					.setLabel('Locations')
					.setStyle('SECONDARY')
			);
			.addComponents(
				new MessageButton()
					.setCustomId('characters')
					.setLabel('Characters')
					.setStyle('SECONDARY')
			);

        const objectsButton = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('objects')
					.setLabel('Objects')
					.setStyle('SECONDARY')
			);   
        
        embed.setImage('https://i.stack.imgur.com/Fzh0w.png');

        await interaction.reply({ 
            embeds: [embed], 
            components: [
                buttons
            ] 
        }),
    }
}


