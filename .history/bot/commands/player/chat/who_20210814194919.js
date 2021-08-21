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

        let table = '>>> __**Online Users**__\n';
        users.forEach((user, index) => {
            switch (true) {
                case user.rank < 10:
                    break;
                case user.rank >= 10 && user.rank < 20:
                    break;
                case user.rank >= 20 && user.rank < 30:
                    break;
                case user.rank >= 30 && user.rank < 40:
                    break;
                case user.rank >= 40 && user.rank < 50:
                    break;
            } 

            table +=  '```ini\n[ ' + user.username + ' ]' + '\t';
            table += '(Rank ' + user.rank + ')';   
            table += '\n ```';
        });
        table = table;

        // const embed = new MessageEmbed()
        //         .setColor('#0099ff')
        //         .setTitle('Online')
        //         .setDescription(table)

		// await interaction.editReply({ content: 'test', ephemeral: true, embeds: [embed]});
        await interaction.editReply(table)
	},
};