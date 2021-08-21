const { SlashCommandBuilder } = require('@discordjs/builders');
const discordEmoji = require('discord-emoji')
const { GuildEmojiManager, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('author')
		.setDescription('A tool for narrators to build out their worlds. '),
    async execute(client, type, interaction) {    
        const embed = new MessageEmbed()
            .setColor('0x689f40')
            .setTitle('Welcome to Author Mode!')
            .setDescription(
                'This mode is intended for players that wish to create their own stories to share with fellow players.\n\n' + 
                'What would you like to work on today?\n\n' +
                '__**Stories**__\nSet up an adventure that uses the locations, characters, object, and events that you have created.\n\n' + 
                '__**Locations**__\nCreate and edit worlds, zones, and rooms.\n\n' + 
                '__**Characters**__\nCreate and edit enemies, npcs, and puppets.\n\n' + 
                '__**Objects**__\nCreate and edit equipment, furniture and other items.\n\n' + 
                '__**Events**__\n Add a trigger and resulting event to a location, character or object. \n\n' + 
                '*(For additional information type"/help author".)*'
                )
            .setImage('https://i.stack.imgur.com/Fzh0w.png');

        const buttons = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setStyle('SECONDARY')
                .setCustomId('stories')
                .setLabel('Stories')
                .setEmoji(discordEmoji.objects.memo)
        )
        .addComponents(
            new MessageButton()
                .setStyle('SECONDARY')
                .setCustomId('locations')
                .setLabel('Locations')
                .setEmoji(discordEmoji.travel.world_map)
        )
        .addComponents(
            new MessageButton()
                .setStyle('SECONDARY')
                .setCustomId('characters')
                .setLabel('Characters')
                .setEmoji(discordEmoji.people.woman_mage_dark_skin_tone)
        )
        .addComponents(
            new MessageButton()
                .setStyle('SECONDARY')
                .setCustomId('objects')
                .setLabel('Objects')
                .setEmoji(discordEmoji.objects.chair)
        )
        .addComponents(
            new MessageButton()
                .setStyle('SECONDARY')
                .setCustomId('events')
                .setLabel('Events')
                .setEmoji(discordEmoji.nature.zap)
        );  

        await interaction.reply({ 
            embeds: [embed], 
            components: [buttons] 
        });
    }
}


