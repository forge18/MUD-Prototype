const prefix = process.env.PREFIX;
const type = 'interaction';

exports.run = async(client, interaction) => {
    if (!interaction.isCommand()) return;
	
	if (!client.commands.has(interaction.commandName)) return;

	try {
		console.log(interaction.commandName);
		await client.commands.get(interaction.commandName).execute(client, type, interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
}