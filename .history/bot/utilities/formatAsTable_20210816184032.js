const { MessageEmbed } = require('discord.js');

module.exports = function(title, columns, color = null) 
{
    const embed = new MessageEmbed()
            .setColor(color)
            .setTitle(title)
console.log(columns);
    columns.forEach((column, index) => {
        embed.setField(column['name'], column['data'].join('\n'), true);
    });  
    
    embed.setImage('https://i.stack.imgur.com/Fzh0w.png');

    return embed;
}