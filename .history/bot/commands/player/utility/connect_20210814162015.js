const { SlashCommandBuilder } = require('@discordjs/builders');
const User = require('../../../data/schemas/UserSchema');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('connect')
		.setDescription('Connect to the game'),
	async execute(client, type, interaction) {
        await interaction.reply('Connecting...')
        const currentUser = await User.findOne({discordId: interaction.user.id}, 
            (error, data) => {
                if(error) throw new Error(error);
            });

        if(currentUser) {
            try
            {   
                if(currentUser.online) {
                    await interaction.editReply('You are already connected... ');
                }    
                else {
                    currentUser.online = true;
                    currentUser.lastLogin = Date.now;
                    await currentUser.save()
                    console.log(interaction.user.username + " has logged in.");
                    await interaction.editReply('You have successfully connected. ');
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
                    joinedOn: Date.now,
                    lastLogin: Date.now
                }, 
                function(error, data) {
                    if(error) throw new Error(error);
                })
                console.log(interaction.user.username + " has been created.");
                console.log(interaction.user.username + " has been logged in.");
            }
            catch(error)
            {
                throw new Error(error);
            }

		    await interaction.editReply('You have successfully connected. Welcome to "The Hub"! ');
        }
	},
};