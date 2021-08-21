const prefix = process.env.PREFIX;

exports.run = async(client, message) => {
    if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

    let commandBody = message.content.slice(prefix.length)
    let commandFile = '';
    if (commandBody.includes(' '))
    {
        let args = commandBody.split(' ')
        let command = args.shift().toLowerCase()
        commandFile = client.commands.get(command) || client.aliases.get(command);
    }

       
    console.log(commandBody);
    console.log(args);
    console.log(command);
    console.log(commandFile);
    if (!commandFile) return;
    commandFile.execute(client, message, args);
}