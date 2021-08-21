const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const builder = require('@discordjs/builders');
var dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

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

        let userList = [];
        let rankList = [];
        let onlineList = [];
        users.forEach((user, index) => {
            userList.push('`HTTP')
            userList.push('\n' + user.username + '\n') 
            userList.push('` \n');
            rankList.push(user.rank);
            onlineList.push(dayjs(user.updatedAt).fromNow());
        });
        table = table;

        const embed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Currently Online')
                .setFields(
                    {name: 'User', value: userList.join('\n'), inline: true},
                    {name: 'Rank', value: rankList.join('\n'), inline: true},
                    {name: 'Logged Since', value: onlineList.join('\n'), inline: true}
                )
                .setImage('https://i.stack.imgur.com/Fzh0w.png');

                await interaction.editReply({ content: 'test', ephemeral: true, embeds: [embed]});
        // await interaction.editReply(table)
	},
};