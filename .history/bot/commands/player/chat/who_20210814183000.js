const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const User = require('../../../data/schemas/UserSchema');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('who')
		.setDescription('A list of users that are currently online. '),
	async execute(client, type, interaction) {
        await interaction.reply('Loading...');
        const users = await User.find({
            online: true
        }, 
        [ 
            'username',
            'rank',
            'updatedAt'
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
            
        // let table = '```';
        // table += "Rank\tUsername`\tOnline Since\n"
        // users.forEach((user, index) => {
        //     table += user.rank + '\t' + user.username + '\t' + user.updatedAt + '\n';
        // });
        // table += '```';

        const embed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Online')
                // .setDescription(table)
                 .setFooter("\u200B".repeat(50/*any big number works too*/) + '|')

        var ranks = '';
        var usernames = '';
        var lastOnlines = '';
        users.forEach((user, index) => {
            ranks += user.rank + '\n';
            usernames = user.username + '\n';
            lastOnlines = user.lastOnline + '\n';
            
        });
        
        embed.addField('Rank', ranks, true);
        embed.addField('\u200B', '\u200B', true);
        embed.addField('Username', usernames, true);
        embed.addField('\u200B', '\u200B', true);
        embed.addField('Last Online', lastOnlines, true);

		await interaction.editReply({ content: 'test', ephemeral: true, embeds: [embed]});

	},
};