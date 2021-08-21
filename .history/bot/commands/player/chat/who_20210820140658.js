const { SlashCommandBuilder } = require('@discordjs/builders');
var dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
const formatAsTable = require('../../../functions/createEmbedTable');
const getOnlineUsers = require('../../../functions/getOnlineUsers');

dayjs.extend(relativeTime)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('who')
		.setDescription('A list of users that are currently online. '),
	async execute(client, type, interaction) {
        const users = await getOnlineUsers();

        let userList = [];
        let rankList = [];
        let onlineList = [];

        users.forEach((user, index) => {
            userList.push(user.username) 
            rankList.push(user.rank);
            onlineList.push('*' + dayjs(user.updatedAt).fromNow() + '*');
        });

        const embed = createEmbedTable(
            'Currently Online', 
            [
                {
                    'name': 'User',
                    'data': userList,
                },
                {
                    'name': 'Rank',
                    'data': rankList,
                },
                {
                    'name': 'Logged In',
                    'data': onlineList,
                },
            ], 
            'LIGHT_GREY'
        );

        await interaction.reply({ content: '** **', ephemeral: true, embeds: [embed]});

	},
};