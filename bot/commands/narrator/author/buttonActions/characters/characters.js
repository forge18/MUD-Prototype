const { MessageActionRow, MessageEmbed, MessageSelectMenu } = require('discord.js');
const Npc = require('../../../../../data/schemas/Worldbuilding/Npc/NpcSchema')

module.exports = async function(client, type, interaction)
{
    selectCharacter(client, type, interaction);
}

async function selectCharacter(client, type, interaction)
{
    await interaction.deferUpdate();
    const characters = await Npc.find({"permittedUsers.discordId": interaction.user.id });
    let characterOptions = [
        {
            label: 'Create a New Character',
            description: '',
            value: 'new',
        }
    ];
    characters.forEach(async function(character, index) {
        characterOptions.push({
            label: character.name,
            description: 'character.description',
            value: character.id,
        });
    });

    const embed = new MessageEmbed()
                .setColor('0x689f40')
                .setTitle('Author Mode [Characters]')
                .setDescription(
                    'Would you like to create a new character or update an existing character?\n\n' +
                    '*For additional information type "/help characters".*'
                    )
                .setImage('https://i.stack.imgur.com/Fzh0w.png');

            const select = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('characters')
                    .addOptions(characterOptions)
            )

            const message = await interaction.channel.messages.fetch(interaction.message.id);
            await message.edit({ 
                embeds: [embed], 
                components: [select] 
            });

}