const { MessageEmbed } = require('discord.js');

module.exports = function(cardType, title, content) 
{
    switch(cardType) {
        case 'blue':
            color = ;
            break;
        default:
            color = DEFAULT; // Blue
            break;
    }

    const embed = new MessageEmbed()
            .setColor(color)
            .setTitle(title)

    columns.forEach((column, index) => {
        embed.addField(column['name'], column['data'].join('\n'), true);
    });  
    
    embed.setImage('https://i.stack.imgur.com/Fzh0w.png');

    return embed;
}