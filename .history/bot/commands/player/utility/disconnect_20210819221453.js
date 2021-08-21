const { UserManager, Client } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const User = require('../../../data/schemas/Admin/UserSchema');



module.exports = {
	data: new SlashCommandBuilder()
		.setName('disconnect')
		.setDescription('Disconnect from the game and save your progress'),
	async execute(client, type, interaction) {
        const currentUser = await User.findOne({discordId: interaction.user.id}, 
            (error, data) => {
                console.log(error);
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
                console.log(error);
                if(error) throw new Error(error);
            }
        }

		const discordUser = await client.users.fetch(interaction.user.id)
        await discordUser.send('You have disconnected. Your progress has been saved.');
	},
};
