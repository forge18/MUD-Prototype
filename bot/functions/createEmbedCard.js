const { MessageEmbed } = require('discord.js');

// Color Reference: https://gist.github.com/thomasbnt/b6f455e2c7d743b796917fa3c205f812

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
            .setDescription(description)

    columns.forEach((column, index) => {
        embed.addField(column['name'], column['data'].join('\n'), true);
    });  
    
    embed.setImage('https://i.stack.imgur.com/Fzh0w.png');

    return embed;
}