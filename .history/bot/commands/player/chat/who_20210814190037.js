const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const builder = require('@discordjs/builders');

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

        const rankLength = 4;
        const usernameLength = 20;
            
        let table = 'Rank\t\tUsername\t\tOnline Since\n';
        users.forEach((user, index) => {
            const rankSpaces = rankLength - user.rank.rankLength;
            const usernameSpaces = usernameLength - user.username.rankLength;

            table += user.rank;
            for(let i=0; i < rankSpaces; i++)
                table += '&nbsp'
            table += '\t\t' + user.username 
            for(let i=0; i < usernameSpaces; i++)
                table += '&nbsp'
            table += '\t\t' + user.updatedAt + '\n';
        });
        table = builder.codeBlock(table);

        const embed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Online')
                .setDescription(table)

		await interaction.editReply({ content: 'test', ephemeral: true, embeds: [embed]});

	},
};