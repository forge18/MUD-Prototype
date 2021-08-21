const User = require('../data/schemas/Admin/UserSchema')

module.exports = function( client, category, sender, recipients, message ) 
{
    var senderPrefix = '';
    var recipientPrefix = '';
    switch(category.toLowerCase()) {
        case 'group':
            senderPrefix = `[Group] ${sender.name} tells the group, `;
            recipientPrefix = `You tell the group, `;
            break; 
        case 'chat':
            senderPrefix = `[Global] ${sender.name}: `
            break;
        case 'say':
            senderPrefix = `[Local]${sender.name} says `;
            recipientPrefix = `You say, `;
            break;
        case 'tell':
            senderPrefix = `[DM] ${sender.name} tells you, `;
            recipientPrefix = `You tell `;
            break;
        case 'whisper':
            senderPrefix = `[DM] ${sender.name} whispers to you, `;
            recipientPrefix = `You whisper to `;
            break;
        default:
            message.reply('*Unable to send last message.*')
            break;
    }

    var messageContent = message.options.getString('message';)
    recipients.forEach(async function(recipient, index) {
        if(recipient.discordId === '318866123640537091')
        {
            const messageRecipient = await client.users.fetch(recipient.discordId);
            messageRecipient.send(recipientPrefix + '"' + message.content + '"')
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
        console.log(message);
        message.reply(senderPrefix + '"' + message.content + '"')
    }
    else 
    {
        const messageSender = User.findOne(sender.id);
        messageSender.send(senderPrefix + '"' + message.content + '"')
            .catch(message.reply('*Unable to send last message.*'));
    }    
}