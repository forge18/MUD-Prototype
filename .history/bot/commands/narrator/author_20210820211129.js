const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('author')
		.setDescription('A tool for narrators to build out their worlds. '),
    async execute(client, type, interaction) {    

        const embed = new MessageEmbed()
                .setColor('0x689f40')
                .setTitle('Author Mode')
                .setDescription('What would you like to work on?');
                
        const locationsButton = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('locations')
					.setLabel('Locations')
					.setStyle('SECONDARY')
			);
            
        const charactersButton = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('characters')
					.setLabel('Characters')
					.setStyle('SECONDARY')
			);
        
        embed.setImage('https://i.stack.imgur.com/Fzh0w.png');

        return embed;
    }
}



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