const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const User = require('../../../data/schemas/UserSchema');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('who')
		.setDescription('A list of users that are currently online. '),
	async execute(client, type, interaction) {
        const users = await User.find({
            online: true
        }, 
        [ 
            'username',
            'rank',
            'updatedOn'
        ],
        {
            sort: {
                'rank': -1,
                'username': 1
            }
        },
        function(error, data) {
            if(error) throw new Error(error);
        });
            
            
        

        const embed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Online')
                .setDescription('Users that are currently online.')
                .addField("Rank`\t`Username`\t`Online Since")
                
        users.forEach((user, index) => {
            embed.addField(user.rank + "`\t`" + user.username + "`\t`" + user.updatedOn);
        });

		await interaction.reply({ content: 'test', ephemeral: true, embeds: [embed]});

	},
};