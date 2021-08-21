const { SlashCommandBuilder } = require('@discordjs/builders');
const User = require('../../../schemas/UserSchema');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('connect')
		.setDescription('Connect to the game'),
	async execute(client, type, interaction) {
        const currentUser = await User.findByIdAndUpdate(interaction.user.id).execute();

        if(currentUser) {
            try
            {            
                currentUser.online = true;
                currentUser.lastLogin = Date.now;
                await currentUser.save()
                console.log(interaction.user.username + " has logged in.");
            }
            catch(error)
            {
                if(error) throw new Error(error);
            }
        }
        else {
            try
            {
                await User.create({
                    discordId: interaction.user.id,
                    username:interaction.user.username,
                    online: true,
                    joinedOn: Date.now,
                    lastLogin: Date.now
                })
                console.log(interaction.user.username + " has been created.");
                console.log(interaction.user.username + " has been logged in.");
            }
            catch(error)
            {
                throw new Error(error);
            }

		    await interaction.reply('You have successfully connected. Welcome to "The Hub"! ');
        }
	},
};