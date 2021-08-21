const { MessageEmbed } = require('discord.js');

module.exports = function(color, text) 
{
    let codeBlockType = '';
    let prefix = ''
    switch(color.toLowerCase()) {
        case 'red':
            
            break;
        case 'orange':
            codeBlockType = 'prolog'
            prefix = 'capital';
            break;
        case 'yellow':
            codeBlockType = 'fix';
            prefix = '';
            break;
        case 'green':
            codeBlockType = 'diff';
            prefix = '+';
            break;
        case 'blue':
            codeBlockType = 'asciidoc';
            prefix = '=';
            break;
        case 'turquoise':
            codeBlockType = 'yaml';
            prefix = '';
            break;
    }

    let newText = '';

    
}