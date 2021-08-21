const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js'); 
require('dotenv').config();
// const MongoClient = require('mongodb').MongoClient;
// const MongoDBProvider = require('commando-provider-mongo').MongoDBProvider;

const path = require('path');
const prefix = process.env.PREFIX;
const token = process.env.TOKEN;

const client = new Client({
    intents: [
		Intents.FLAGS.GUILDS, 
		Intents.FLAGS.GUILD_MESSAGES, 
		Intents.FLAGS.DIRECT_MESSAGES]
});

client.commands = new Collection();

const commandFiles = fs.readdirSync(path.join(__dirname, './commands/testing')).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(path.join(__dirname, `./commands/testing/${file}`));
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

const eventFiles = fs.readdirSync(path.join(__dirname, './events/')).filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
        let event= require(path.join(__dirname, `./events/${file}`));
        let eventName = file.toLowerCase().split(".")[0];
        client.on(eventName, (...args) => eventFunc.run(client, ...args));
}

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

client.on('interactionCreate', async interaction => {
	console.log(interaction);
	if (!interaction.isCommand()) return;
	
	if (!client.commands.has(interaction.commandName)) return;

	try {
		await client.commands.get(interaction.commandName).execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});


client.once('ready', () => {
	console.log('Ready!');
});

client.login(token)


// client.setProvider(
// 	MongoClient.connect('mongodb://localhost:27017')
// 	.then(client => new MongoDBProvider(client, 'abot'))
// ).catch(console.error);

// client.registry
//     .registerDefaultTypes()
//     .registerGroups([
//         ['admin', 'Admin'],
// 		['moderator', 'Moderator'],
// 		['narrator', 'Narrator'],
// 		['player', 'Player'],
// 		['testing', 'Testing']
//     ])
//     .registerDefaultGroups()
//     .registerDefaultCommands({ help: false, eval: false}) 
//     .registerCommandsIn(path.join(__dirname, 'commands'));



