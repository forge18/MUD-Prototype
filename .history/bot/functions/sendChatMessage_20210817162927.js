
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
            break;

        case 'tell':
            break;

        case 'whisper':
            break;

        default:

            break;
    }

    recipients.forEach((recipient, index) => {
        const messageRecipient = UserManager.fetch(recipient.discordId);
        messageRecipient.send(sender + ' says "' + message.content + '"')
            .catch(message.reply('*Unable to send last message.*'));
    });
}