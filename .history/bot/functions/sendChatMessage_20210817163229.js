
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

            break;
        case 'say':
            senderPrefix = `${sender.name} says `;
            recipientPrefix = `You say, `;
            break;
        case 'tell':
            senderPrefix = `${sender.name} tells you, `;
            recipientPrefix = `You tell , `;
            break;
        case 'whisper':

            break;
        default:

            break;
    }

    recipients.forEach((recipient, index) => {
        const messageRecipient = UserManager.fetch(recipient.discordId);
        messageRecipient.send(recipientPrefix + '"' + message.content + '"')
            .catch(message.reply('*Unable to send last message.*'));

        const messageSender = UserManager.fetch(sender.discordId);
        messageSender.send(senderPrefix + '"' + message.content + '"')
    });
}