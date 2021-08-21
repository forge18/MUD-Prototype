const User = require('../data/schemas/Admin/UserSchema')

module.exports = function( client, category, sender, recipients, message ) 
{
    var senderPrefix = '';
    var recipientPrefix = '';
    switch(category.toLowerCase()) {
        case 'global':
            senderPrefix = `** **\n[Global] ${sender.username}: `;
            recipientPrefix = `** **\n[Global] ${sender.username}: `;
            break;
        case 'group':
            senderPrefix = `** **\n[Group] ${sender.username} tells the group, `;
            recipientPrefix = `** **\nYou tell the group, `;
            break; 
        case 'say':
            senderPrefix = `** **\n[Local]${sender.username} says `;
            recipientPrefix = `** **\nYou say, `;
            break;
        case 'tell':
            senderPrefix = `** **\n[DM] ${sender.username} tells you, `;
            recipientPrefix = `** **\nYou tell `;
            break;
        case 'whisper':
            senderPrefix = `** **\n[DM] ${sender.username} whispers to you, `;
            recipientPrefix = `** **\nYou whisper to `;
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
            //.catch(message.reply('*Unable to send last message.*'));
    }    
}