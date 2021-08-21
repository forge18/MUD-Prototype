const { SlashCommandBuilder } = require('@discordjs/builders');
const { User } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('connect')
		.setDescription('Connect to the game'),
	async execute(client, type, interaction) {
        const currentUser = await User.findByIdAndUpdate(message.author.id, {
            online = true,
        }, 
        function(err, docs) {
            if(err) {
                console.log(err)
            }
            else {
                console.log('Updated User: ', docs);
            }
        });
        currentUser.online = true;
        await currentUser.update({})
 			message.channel.send(description);
		await interaction.reply(interaction.options._hoistedOptions[0].value);
	},
};