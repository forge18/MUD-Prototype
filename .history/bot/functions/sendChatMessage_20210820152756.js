const User = require('../data/schemas/Admin/UserSchema')

module.exports = function( client, category, sender, recipients, message ) 
{
    var senderPrefix = '';
    var recipientPrefix = '';
    switch(category.toLowerCase()) {
        case 'global':
            senderPrefix = `[Global] ${sender.username}: `
            console.log(sender);
            break;
        case 'group':
            senderPrefix = `[Group] ${sender.username} tells the group, `;
            recipientPrefix = `You tell the group, `;
            break; 
        case 'say':
            senderPrefix = `[Local]${sender.username} says `;
            recipientPrefix = `You say, `;
            break;
        case 'tell':
            senderPrefix = `[DM] ${sender.username} tells you, `;
            recipientPrefix = `You tell `;
            break;
        case 'whisper':
            senderPrefix = `[DM] ${sender.username} whispers to you, `;
            recipientPrefix = `You whisper to `;
            break;
        default:
            message.reply('*Unable to send last message.*')
            break;
    }
    console.log(senderPrefix);
    var messageContent = message.options.getString('message');
    recipients.forEach(async function(recipient, index) {
        if(recipient.discordId === '318866123640537091')
        {
            const messageRecipient = await client.users.fetch(recipient.discordId);
            messageRecipient.send(recipientPrefix + '"' + messageContent + '"')
                .catch(message.reply('*Unable to send last message.*'));
            
            const prefixToPersonalize = ['tell', 'whisper'];
            if( prefixToPersonalize.includes(category.toLowerCase()) )
            {
                senderPrefix += `${recipient.name} , '`;
            }
        }
    });
    
    if(message.user.id === sender.id)
    {
        message.reply(senderPrefix + '"' + messageContent + '"')
    }
    else 
    {
        const messageSender = User.findOne(sender.id);
        messageSender.send(senderPrefix + '"' + messageContent + '"')
            .catch(message.reply('*Unable to send last message.*'));
    }    
}