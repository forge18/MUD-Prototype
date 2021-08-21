const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const builder = require('@discordjs/builders');
var dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
const formatAsTable = require('../../../functions/formatAsTable');
const getOnlineUsers = require('../../../functions/getOnlineUsers');




dayjs.extend(relativeTime)

const User = require('../../../data/schemas/Admin/UserSchema');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('who')
		.setDescription('A list of users that are currently online. '),
	async execute(client, type, interaction) {
        await interaction.reply('Loading...');
        const users = await getOnlineUsers();

        let userList = [];
        let rankList = [];
        let onlineList = [];
        
        users.forEach((user, index) => {
            userList.push(user.username) 
            rankList.push(user.rank);
            onlineList.push('*' + dayjs(user.updatedAt).fromNow() + '*');
        });

        const embed = formatAsTable(
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
            '#0099ff'
        );

        await interaction.editReply({ content: 'test', ephemeral: true, embeds: [embed]});

	},
};