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

    recipients.forEach(async function(recipient, index) {
        if(recipient._id === '318866123640537091')
        {
            const messageRecipient = await client.users.fetch(recipient._id);
            messageRecipient.send(recipientPrefix + '"' + message.content + '"')
                .catch(message.reply('*Unable to send last message.*'));
            
            const prefixToPersonalize = ['tell', 'whisper'];
            if( prefixToPersonalize.includes(category.toLowerCase()) )
            {
                senderPrefix += `${recipient.name} , '`;
            }
        }
    });

    console.log(sender);
    if(message.user.id === sender.id)
    {
        message.reply(senderPrefix + '"' + message.content + '"')
    }
    else 
    {
        const messageSender = User.findOne(sender.id);
        messageSender.send(senderPrefix + '"' + message.content + '"')
            .catch(message.reply('*Unable to send last message.*'));
    }    
}