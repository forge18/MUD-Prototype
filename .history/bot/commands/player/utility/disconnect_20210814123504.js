const { SlashCommandBuilder } = require('@discordjs/builders');
const { User } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('disconnect')
		.setDescription('Disconnect from the game and save your progress'),
	async execute(client, type, interaction) {
        const currentUser = await User.findByByIdAndUpdate( message.author.id );

        if(currentUser.online) {
            try
            {            
                currentUser.online = false;
                currentUser.lastLogin = Date.now();
                await currentUser.save()
                console.log(message.author.username + " has logged out.");
            }
            catch(error)
            {
                if(error) throw new Error(error);
            }
        }

		await interaction.reply('You have disconnected. Your progress has been saved.');
	},
};
