var prefix = process.env.PREFIX;

client.on('messageCreate', message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const commandBody = message.content.slice(prefix.length);
	const args = commandBody.split(' ');
	const command = args.shift().toLowerCase();

	try {
		await client.commands.get(command).execute(command);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});