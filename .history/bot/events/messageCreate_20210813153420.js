const prefix = process.env.PREFIX;
const type = 'message';

exports.run = async(client, message) => {
    var body = message.content;

    if (message.author.bot) return;
	if (!body.startsWith(prefix)) return;

    let commandBody = body.trim().substring(body.indexOf(prefix) + 1);
    let argsCount = commandBody.indexOf(' ') !== -1 ? commandBody.split(' ').length : 0;
    let args = argsCount > 1 ? body.split(' '): null;
    let command = args != null ? args.shift() : commandBody;
    let commandFile = client.commands.get(command) || client.aliases.get(command);

    if (!commandFile) return;
    commandFile.execute(client, type, message, args);
}