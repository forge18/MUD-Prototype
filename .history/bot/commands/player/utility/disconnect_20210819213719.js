const { Client } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const User = require('../../../data/schemas/Admin/UserSchema');



module.exports = {
	data: new SlashCommandBuilder()
		.setName('disconnect')
		.setDescription('Disconnect from the game and save your progress'),
	async execute(client, type, interaction) {
        const currentUser = await User.fetch({discordId: interaction.user.id}, 
            (error, data) => {
                if(error) throw new Error(error);
            });

        if(currentUser.online) {
            try
            {            
                currentUser.online = false;
                currentUser.lastLogin = Date.now();
                await currentUser.save()
            }
            catch(error)
            {
                if(error) throw new Error(error);
            }
        }

		await Client.users.fetch(interaction.user.id).send('You have disconnected. Your progress has been saved.');
	},
};
