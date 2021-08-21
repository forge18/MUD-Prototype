const { SlashCommandBuilder } = require('@discordjs/builders');

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

        const embed = createEmbedCard(
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
            '#0x689f40'
        );

        await interaction.reply({ content: '** **', ephemeral: true, embeds: [embed]});

	},
};



const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.1.2'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "components": [
    {
      "type": 1,
      "components": [
        {
          "style": 2,
          "label": `Locations`,
          "custom_id": `row_0_button_0`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 2,
          "label": `Characters`,
          "custom_id": `row_0_button_1`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 2,
          "label": `Objects`,
          "custom_id": `row_0_button_2`,
          "disabled": false,
          "type": 2
        }
      ]
    }
  ],
  "embeds": [
    {
      "type": "rich",
      "title": `Author Mode`,
      "description": `What would you like to work on?`,
      "color": 0x689f40
    }
  ]
});