
module.exports = function( category, sender, recipients, message ) 
{
    recipients.forEach((recipient, index) => {
        const messageRecipient = UserManager.fetch(recipient.discordId);
        messageRecipient.send(message.username + ' says "' + message.content + '"')
            .catch(message.reply('*Unable to send last message.*'));
    });
}