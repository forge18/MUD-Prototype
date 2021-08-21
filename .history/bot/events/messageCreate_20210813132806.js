const prefix = process.env.PREFIX;

exports.run = async(client, message) => {
    if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

    let commandBody = message.content.slice(prefix.length),
	    args = commandBody.split(' '),
	    command = args.shift().toLowerCase(),
        commandFile = client.commands.get(command) || client.aliases.get(command);
    
    if (!commandFile) return;
    commandFile.run(client, message, args);

    try {
		await client.commands.get(command).execute(command);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
}