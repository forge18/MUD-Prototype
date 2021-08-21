const { SlashCommandBuilder } = require('@discordjs/builders');
const { User } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('connect')
		.setDescription('Connect to the game'),
	async execute(client, type, interaction) {
        const currentUser = await User.findByByIdAndUpdate( message.author.id );

        if(currentUser) {
            currentUser.online = true;
            currentUser.lastLogin = Date.now();
            await currentUser.save()
        }
        else {
            const currentUser = await User.create({
                discordId: message.author.id,
                username: message.author.username,
                online: true,
                joinedOn: Date.now(),
                lastLogin: Date.now()
            })
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