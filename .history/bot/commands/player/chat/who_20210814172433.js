const AsciiTable = require('ascii-table');
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

        const table = new AsciiTable('Online')
        table
            .setHeading('Rank', 'Username', 'Online Since')
            
        currentUser.forEach((item, index) => {
            table.addRow(currentUser.rank, currentUser.username, currentUser.updatedOn);
        });

        const embed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Online')
                .setDescription(table);

		await interaction.reply({ content: '', ephemeral: true, embeds: [embed]});

	},
};