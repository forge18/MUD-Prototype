const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js'); 
require('dotenv').config();
// const MongoClient = require('mongodb').MongoClient;
// const MongoDBProvider = require('commando-provider-mongo').MongoDBProvider;


const owner = process.env.OWNER;
const path = require('path');
const prefix = process.env.PREFIX;
const token = process.env.TOKEN;

const client = new Client({
    intents: [Intents.FLAGS.GUILDS]
});

client.commands = new Collection();

const commandFiles = fs.readdirSync(path.join(__dirname, './commands/testing')).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(path.join(__dirname, `./commands/testing/${file}`));
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	console.log('test');
	if (!client.commands.has(interaction.commandName)) return;

	try {
		await client.commands.get(interaction.commandName).execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
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



