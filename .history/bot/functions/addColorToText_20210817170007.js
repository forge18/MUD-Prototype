const { MessageEmbed } = require('discord.js');

module.exports = function(color, text) 
{
    let codeBlockType = '';
    let prefix = ''
    switch(color.toLowerCase()) {
        case 'red':
            
            break;
        case 'orange':
            break;
        case 'yellow':
            break;
        case 'green':
            break;
        case 'blue':
            codeBlockType = 'asciidoc';
            prefix = '='
            break;
        case 'turquoise':
            codeBlockType = 'yaml';
            prefix = '';
            break;
    }

    let newText = '';

    
}