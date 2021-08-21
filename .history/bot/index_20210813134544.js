const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js'); 
require('dotenv').config();
// const MongoClient = require('mongodb').MongoClient;
// const MongoDBProvider = require('commando-provider-mongo').MongoDBProvider;

const path = require('path');
const token = process.env.TOKEN;

const client = new Client({
    intents: [
		Intents.FLAGS.GUILDS, 
		Intents.FLAGS.GUILD_MESSAGES, 
		Intents.FLAGS.DIRECT_MESSAGES]
});

client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();

const commandFiles = fs.readdirSync(path.join(__dirname, './commands/testing')).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	let command = require(path.join(__dirname, `./commands/testing/${file}`));
	let commandName = file.split(".")[0];
	console.log(command)
	client.on(commandName, (...args) => command.run(client, ...args));
}

const eventFiles = fs.readdirSync(path.join(__dirname, './events/')).filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	let event= require(path.join(__dirname, `./events/${file}`));
	let eventName = file.split(".")[0];
	console.log(event);
	client.on(eventName, (...args) => event.run(client, ...args));
}


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



