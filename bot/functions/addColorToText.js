module.exports = function(color, text) 
{
    let codeBlockType = '';
    let prefix = ''
    switch(color.toLowerCase()) {
        case 'red':
            codeBlockType = 'diff';
            prefix = '-';
            break;
        case 'orange':
            codeBlockType = 'prolog'
            prefix = '';
            text = text.charAt(0).toUpperCase() + text.slice(1);
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
        case 'blue2':
            codeBlockType = 'ini';
            prefix = '';
            break;
        case 'cyan':
            codeBlockType = 'yaml';
            prefix = '';
            break;
        case 'grey': 
            codeBlockType = 'bf';
            prefix = '';
    }

    return '```' + codeBlockType + '\n' + prefix + ' ' + text + '\n```';
}