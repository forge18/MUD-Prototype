require('dotenv').config();
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js'); 
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

// const MongoClient = require('mongodb').MongoClient;
// const MongoDBProvider = require('commando-provider-mongo').MongoDBProvider;

const clientId = process.env.TEST_CLIENT_ID;
const guildId = process.env.TEST_GUILD_ID;
const path = require('path');
const token = process.env.TOKEN;

const client = new Client({
    intents: [
		Intents.FLAGS.GUILDS, 
		Intents.FLAGS.GUILD_MESSAGES, 
		Intents.FLAGS.DIRECT_MESSAGES]
});

client.aliases = new Collection();
client.commands = new Collection();
client.events = new Collection();

const eventFiles = fs.readdirSync(path.join(__dirname, './events/')).filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	let event= require(path.join(__dirname, `./events/${file}`));
	let eventName = file.split(".")[0];
	client.on(eventName, (...args) => event.run(client, ...args));
}

const commands = [];
const commandFiles = fs.readdirSync(path.join(__dirname, './commands/testing')).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	let command = require(path.join(__dirname, `./commands/testing/${file}`));
	let commandName = file.split(".")[0];

	client.commands.set(commandName, command);

	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);
(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			// Params are application id, guild id
			Routes.applicationGuildCommands('875048172433596446', '746129654644998155'),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();



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



