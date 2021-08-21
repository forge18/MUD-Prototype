const { SlashCommandBuilder } = require('@discordjs/builders');
const { User } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('connect')
		.setDescription('Connect to the game'),
	async execute(client, type, interaction) {
        const currentUser = await User.findByByIdAndUpdate( message.author.id );

        if(currentUser) {
            try
            {            
                currentUser.online = true;
                currentUser.lastLogin = Date.now();
                await currentUser.save()
                console.log(message.author.username + " has logged in.");
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
                    discordId: message.author.id,
                    username: message.author.username,
                    online: true,
                    joinedOn: Date.now(),
                    lastLogin: Date.now()
                })
                console.log(message.author.username + " has been created.");
                console.log(message.author.username + " has been logged in.");
            }
            catch(error)
            {
                throw new Error(error);
            }
        }



            {
                d
            }, 
            {
                upsert: true
            }, 
            function(error, doc) {
                if(error) throw new Error(error);
                console.log(message.author.username + " has logged in.");
            }
        );

		await interaction.reply('You have successfully connected. Welcome to "The Hub"! ');
	},
};