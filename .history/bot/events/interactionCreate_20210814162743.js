const prefix = process.env.PREFIX;
const type = 'interaction';

exports.run = async(client, interaction) => {
    if (!interaction.isCommand()) return;
	
	if (!client.commands.has(interaction.commandName)) return;

	try {
		await client.commands.get(interaction.commandName).execute(client, type, interaction);
	} catch (error) {
		console.error(error);
		if(interaction.reply)
		await interaction.editReply({ content: 'There was an error while executing this command!', ephemeral: true });
		else
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
}