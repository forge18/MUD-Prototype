const { MessageEmbed } = require('discord.js');

module.exports = function(columns) 
{
    const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Currently Online')

    columns.foreach((column, index) => {
        embed.setField(column['name'], column['data'].join('\n'), true);
    });  

    embed.setImage('https://i.stack.imgur.com/Fzh0w.png');
}