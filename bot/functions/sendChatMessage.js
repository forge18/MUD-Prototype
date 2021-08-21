const User = require('../data/schemas/Admin/UserSchema');
const addColorToText = require('./addColorToText');



module.exports = function( client, category, sender, recipients, message ) 
{
    var senderPrefix = '';
    var recipientPrefix = '';
    var color = '';
    switch(category.toLowerCase()) {
        case 'global':
            senderPrefix = `[Global] ${sender.username}: `;
            recipientPrefix = `[Global] ${sender.username}: `;
            color = 'blue';
            break;
        case 'group':
            senderPrefix = `{Group} ${sender.username} tells the group, `;
            recipientPrefix = `You tell the group, `;
            color = 'blue';
            break; 
        case 'say':
            senderPrefix = `(Local)${sender.username} says `;
            recipientPrefix = `You say, `;
            color = 'blue';
            break;
        case 'tell':
            senderPrefix = `<Private> ${sender.username} tells you, `;
            recipientPrefix = `You tell `;
            color = 'blue';
            break;
        case 'whisper':
            senderPrefix = `<Private> ${sender.username} whispers to you, `;
            recipientPrefix = `You whisper to `;
            color = 'blue';
            break;
    }

    var messageContent = message.options.getString('message');
    recipients.forEach(async function(recipient, index) {
        if(recipient.discordId === '318866123640537091')
        {
            const messageRecipient = await client.users.fetch(recipient.discordId);
            messageRecipient.send(addColorToText(color, recipientPrefix + '"' + messageContent + '"'))
            
            const prefixToPersonalize = ['tell', 'whisper'];
            if( prefixToPersonalize.includes(category.toLowerCase()) )
            {
                senderPrefix += `${recipient.name} , '`;
            }
        }
    });
    
    if(message.user.id === sender.id)
    {
        message.reply(addColorToText(color, senderPrefix + '"' + messageContent + '"'))
    }
    else 
    {
        const messageSender = User.findOne(sender.id);
        messageSender.send(addColorToText(color, senderPrefix + '"' + messageContent + '"'))
    }    
}