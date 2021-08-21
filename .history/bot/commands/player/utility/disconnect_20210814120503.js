const { SlashCommandBuilder } = require('@discordjs/builders');
const { User } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('connect')
		.setDescription('Connect to the game'),
	async execute(client, type, interaction) {
        const currentUser = await User.findByIdAndUpdate(message.author.id, {
            online = false,
        }, 
        function(err, docs) {
            if(err) {
                console.log(err)
            }
            else {
                console.log('Updated User: ', docs);
            }
        });

		await interaction.reply('You have successfully connected. Welcome to "The Hub"! ');
	},
};