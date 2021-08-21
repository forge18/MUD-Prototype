const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const User = require('../../../data/schemas/UserSchema');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('who')
		.setDescription('A list of users that are currently online. '),
	async execute(client, type, interaction) {
        const currentUser = await User.find({
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
                
        currentUser.forEach((item, index) => {
            embed.addField(currentUser.rank, currentUser.username, currentUser.updatedOn);
        });

		await interaction.reply({ content: '', ephemeral: true, embeds: [embed]});

	},
};