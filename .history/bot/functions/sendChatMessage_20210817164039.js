
module.exports = function( category, sender, recipients, message ) 
{
    var senderPrefix = '';
    var recipientPrefix = '';
    switch(category.toLowerCase()) {
        case 'group':
            senderPrefix = `${sender.name} tells the group, `;
            recipientPrefix = `You tell the group, `;
            break; 
        case 'chat':
            senderPrefix = `[OOC] ${sender.name}: `
            break;
        case 'say':
            senderPrefix = `${sender.name} says `;
            recipientPrefix = `You say, `;
            break;
        case 'tell':
            senderPrefix = `${sender.name} tells you, `;
            recipientPrefix = `You tell `;
            break;
        case 'whisper':
            senderPrefix = `${sender.name} whispers to you, `;
            recipientPrefix = `You whisper to `;
            break;
        default:
            message.reply('*Unable to send last message.*')
            break;
    }

    recipients.forEach((recipient, index) => {
        const messageRecipient = UserManager.fetch(recipient.discordId);
        messageRecipient.send(recipientPrefix + '"' + message.content + '"')
            .catch(message.reply('*Unable to send last message.*'));
        
        const prefixToPersonalize = ['tell', 'whisper'];
        if( prefixToPersonalize.includes(category.toLowerCase()) )
        {
            senderPrefix += `${recipient.name} , '`;
        }

        const messageSender = UserManager.fetch(sender.discordId);
        messageSender.send(senderPrefix + '"' + message.content + '"')
            .catch(message.reply('*Unable to send last message.*'));
    });
}