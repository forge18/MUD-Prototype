const prefix = process.env.PREFIX;

exports.run = async(client, message) => {
    if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

    let commandBody = message.content.substring(prefix.length, message.content.firstIndexOf(' '));


    let commandFile = null;
    let command = '';
    if (commandBody.includes(' '))
    {
        let args = commandBody.split(' ')
        command = args.shift().toLowerCase()
    }
    
    commandFile = client.commands.get(command) || client.aliases.get(command);

    console.log(commandFile);

    if (!commandFile) return;
    console.log(commandBody);
    console.log(args);
    console.log(command);
    console.log(commandFile);
    commandFile.execute(client, message, args);
}