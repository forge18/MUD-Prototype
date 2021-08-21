const { SlashCommandBuilder } = require('@discordjs/builders');
const { User } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('disconnect')
		.setDescription('Disconnect from the game and save your progress'),
	async execute(client, type, interaction) {
        await User.findByByIdAndUpdate(
            message.author.id, 
            {
                online: false,
                lastLogin: Date.now()
            }, 
            {
                upsert: true
            }, 
            function(error, doc) {
                if(error) throw new Error(error);
                console.log(message.author.username + " has logged out.");
            }
        );

		await interaction.reply('You have disconnected. Your progress has been saved.');
	},
};
