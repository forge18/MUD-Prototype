const AsciiTable = require('ascii-table');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const User = require('../../../data/schemas/UserSchema');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('whoIsOnline')
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
                'rank': descending,
                'username': ascending
            }
        },
        function(error, data) {
            if(error) throw new Error(error);
        });

        const embed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Some title')
                .setURL('https://dioscord.js.org')
                .setDescription('Some description here');

		await interaction.reply({ content: '', ephemeral: true, embeds: [embed]});

	},
};