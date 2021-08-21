const prefix = process.env.PREFIX;

exports.run = async(client, message) => {
    var body = message.content;

    if (message.author.bot) return;
	if (!body.startsWith(prefix)) return;

    let argsCount = body.includes(' ') ? body.split(' ').length : 0;
    let args = argsCount > 1 ? body.split(' '): null;
    let command = args != null ? args.shift() : null;


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