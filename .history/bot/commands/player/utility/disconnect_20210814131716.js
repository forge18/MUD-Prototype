const { SlashCommandBuilder } = require('@discordjs/builders');
const User = require.index.require('./schemas/UserSchema');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('disconnect')
		.setDescription('Disconnect from the game and save your progress'),
	async execute(client, type, interaction) {
        const currentUser = await User.findByByIdAndUpdate( interaction.user.id );

        if(currentUser.online) {
            try
            {            
                currentUser.online = false;
                currentUser.lastLogin = Date.now();
                await currentUser.save()
                console.log(interaction.user.username + " has logged out.");
            }
            catch(error)
            {
                if(error) throw new Error(error);
            }
        }

		await interaction.reply('You have disconnected. Your progress has been saved.');
	},
};
