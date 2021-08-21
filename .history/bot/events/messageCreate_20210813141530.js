const prefix = process.env.PREFIX;

exports.run = async(client, message) => {
    var body = message.content;

    if (message.author.bot) return;
	if (!body.startsWith(prefix)) return;

    let commandBody = body.trim().substring(body.indexOf(prefix) + 1);
    let argsCount = commandBody.includes(' ')
    let args = argsCount > 1 ? body.split(' '): null;
    let command = args != null ? args.shift() : commandBody;
    let commandFile = client.commands.get(command) || client.aliases.get(command);

    console.log(commandBody);
    console.log(args);
    console.log(command);
    console.log(commandFile);

    if (!commandFile) return;
    commandFile.execute(client, message, args);
}