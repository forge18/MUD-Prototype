
module.exports = function( category, sender, recipients, message ) 
{
    switch(category.toLowerCase()) {
        case 'ooc':
        case 'say':
            break;
        case 'tell':
            break;
        case 'whisper':
            break

    }
    
    let verb = 

    recipients.forEach((recipient, index) => {
        const messageRecipient = UserManager.fetch(recipient.discordId);
        messageRecipient.send(sender + ' says "' + message.content + '"')
            .catch(message.reply('*Unable to send last message.*'));
    });
}