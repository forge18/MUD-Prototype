const { SlashCommandBuilder } = require('@discordjs/builders');
const UserSchema = require('../../../data/schemas/Admin/UserSchema');



module.exports = {
	data: new SlashCommandBuilder()
		.setName('disconnect')
		.setDescription('Disconnect from the game and save your progress'),
	async execute(client, type, interaction) {
        const currentUser = await User.findOneAndUpdate({discordId: interaction.user.id}, 
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

		await client.users.get(interaction.user.id).send('You have disconnected. Your progress has been saved.');
	},
};
