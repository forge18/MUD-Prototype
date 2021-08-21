const { SlashCommandBuilder } = require('@discordjs/builders');
const User = require('../../../data/schemas/Admin/UserSchema');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('connect')
		.setDescription('Connect to the game'),
	async execute(client, type, interaction) {
        await interaction.reply('Connecting...')
        const currentUser = await User.find({discordId: interaction.user.id}, 
            (error, data) => {
                if(error) throw new Error(error);
            });

        if(currentUser) {
            try
            {   
                if(currentUser.online) {
                    await interaction.editReply('You are already connected. ');
                }    
                else {
                    currentUser.online = true;
                    currentUser.lastLogin = Date.now;
                    await currentUser.save()
                    await client.users.get(interaction.user.id).send('You have successfully connected. ');
                }       
            }
            catch(error)
            {
                if(error) throw new Error(error);
            }
        }
        else {
            try
            {
                 User.create({
                    discordId: interaction.user.id,
                    username:interaction.user.username,
                    online: true,
                    rank: 1,
                    joinedOn: Date.now(),
                    lastLogin: Date.now()
                }, 
                function(error, data) {
                    if(error) throw new Error(error);
                })
            }
            catch(error)
            {
                throw new Error(error);
            }

		    await client.users.get(interaction.user.id).send('You have successfully connected. Welcome to "The Hub"! ');
        }
	},
};