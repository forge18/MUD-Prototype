const prefix = process.env.PREFIX;

exports.run = async(client, message) => {
    var body = message.content;

    if (message.author.bot) return;
	if (!body.startsWith(prefix)) return;

    let commandBody = body.trim().substring(body.indexOf(prefix));
    let argsCount = commandBody.includes(' ') ? commandBody.split(' ').length : 0;
    let args = argsCount > 1 ? body.split(' '): null;
    let commandFile = args != null ? args.shift() : commandBody;
    

    console.log(commandFile);

    if (!commandFile) return;
    console.log(commandBody);
    console.log(args);
    console.log(command);
    console.log(commandFile);
    commandFile = client.commands.get(command) || client.aliases.get(command);
    commandFile.execute(client, message, args);
}