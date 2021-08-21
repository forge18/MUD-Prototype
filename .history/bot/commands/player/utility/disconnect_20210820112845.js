const { SlashCommandBuilder } = require('@discordjs/builders');
const User = require('../../../data/schemas/Admin/UserSchema');



module.exports = {
	data: new SlashCommandBuilder()
		.setName('disconnect')
		.setDescription('Disconnect from the game and save your progress'),
	async execute(client, type, interaction) {
        console.log(interaction);
        const currentUser = await User.findOne({discordId: interaction.user.id}, 
            (error, data) => {
                if(error) throw new Error(error);
            });
            console.log(currentUser);
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

        await interaction.reply('You have disconnected. Your progress has been saved.');
	},
};
