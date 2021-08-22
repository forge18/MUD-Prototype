require('dotenv').config();
require('module-alias/register')
const { Client, Intents } = require('discord.js'); 

const buildCollections = require('./functions/buildCollections');
const loadSlashCommands = require('./functions/loadSlashCommands');
const connectToDb = require('./data/db/connectToDb');

const client = new Client({
    intents: [
		Intents.FLAGS.GUILDS, 
		Intents.FLAGS.GUILD_MESSAGES, 
		Intents.FLAGS.DIRECT_MESSAGES]
});

const commands = buildCollections(client);
loadSlashCommands(commands);
connectToDb();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.TOKEN)
