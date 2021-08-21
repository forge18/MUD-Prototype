const { SlashCommandBuilder } = require('@discordjs/builders');
const { User } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('disconnect')
		.setDescription('Disconnect from the game and save your progress'),
	async execute(client, type, interaction) {
        await User.findByIdAndUpdate(message.author.id, {
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

		await interaction.reply('You have disconnected. Your progress has been saved.');
	},
};