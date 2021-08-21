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
            senderPrefix = `(Group) ${sender.username} tells the group, `;
            recipientPrefix = `You tell the group, `;
            color = '';
            break; 
        case 'say':
            senderPrefix = `|Local|${sender.username} says `;
            recipientPrefix = `You say, `;
            break;
        case 'tell':
            senderPrefix = `<Private> ${sender.username} tells you, `;
            recipientPrefix = `You tell `;
            break;
        case 'whisper':
            senderPrefix = `<Private> ${sender.username} whispers to you, `;
            recipientPrefix = `You whisper to `;
            break;
    }

    var messageContent = message.options.getString('message');
    recipients.forEach(async function(recipient, index) {
        if(recipient.discordId === '318866123640537091')
        {
            const messageRecipient = await client.users.fetch(recipient.discordId);
            messageRecipient.send(addColorToText('orange', recipientPrefix + '"' + messageContent + '"'))
            
            const prefixToPersonalize = ['tell', 'whisper'];
            if( prefixToPersonalize.includes(category.toLowerCase()) )
            {
                senderPrefix += `${recipient.name} , '`;
            }
        }
    });
    
    if(message.user.id === sender.id)
    {
        message.reply(addColorToText('orange', senderPrefix + '"' + messageContent + '"'))
    }
    else 
    {
        const messageSender = User.findOne(sender.id);
        messageSender.send(addColorToText('orange', senderPrefix + '"' + messageContent + '"'))
    }    
}