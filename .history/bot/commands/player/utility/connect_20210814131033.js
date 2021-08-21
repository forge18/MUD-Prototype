const { SlashCommandBuilder } = require('@discordjs/builders');
const { User } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('connect')
		.setDescription('Connect to the game'),
	async execute(client, type, interaction) {
        console.log(interaction);
        const currentUser = await User.findByByIdAndUpdate( interaction.user.id );

        if(currentUser) {
            try
            {            
                currentUser.online = true;
                currentUser.lastLogin = Date.now();
                await currentUser.save()
                console.log(interaction.author.username + " has logged in.");
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
                    discordId: interaction.author.id,
                    username:interaction.author.username,
                    online: true,
                    joinedOn: Date.now(),
                    lastLogin: Date.now()
                })
                console.log(interaction.author.username + " has been created.");
                console.log(interaction.author.username + " has been logged in.");
            }
            catch(error)
            {
                throw new Error(error);
            }

		    await interaction.reply('You have successfully connected. Welcome to "The Hub"! ');
        }
	},
};