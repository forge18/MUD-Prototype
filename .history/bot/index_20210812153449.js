const Discord = require('discord.js').Structures; 
const Commando = require('discord.js-commando');
const MongoClient = require('mongodb').MongoClient;
const MongoDBProvider = require('commando-provider-mongo').MongoDBProvider;
require('dotenv').config();

const owner = process.env.OWNER;
const path = require('path');
const prefix = process.env.PREFIX;
const token = process.env.TOKEN;

const client = new Commando.Client({
    commandPrefix: prefix,
    owner: owner
});

client
	.on('error', console.error)
	.on('warn', console.warn)
	.on('debug', console.log)
	.on('ready', () => {
		console.log(`Client ready; logged in as ${client.user.username}#${client.user.discriminator} (${client.user.id})`);
	})
	.on('disconnect', () => { console.warn('Disconnected!'); })
	.on('reconnecting', () => { console.warn('Reconnecting...'); })
	.on('commandError', (cmd, err) => {
		if(err instanceof commando.FriendlyError) return;
		console.error(`Error in command ${cmd.groupID}:${cmd.memberName}`, err);
	})
	.on('commandBlocked', (msg, reason) => {
		console.log(oneLine`
			Command ${msg.command ? `${msg.command.groupID}:${msg.command.memberName}` : ''}
			blocked; ${reason}
		`);
	})
	.on('commandPrefixChange', (guild, prefix) => {
		console.log(oneLine`
			Prefix ${prefix === '' ? 'removed' : `changed to ${prefix || 'the default'}`}
			${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
		`);
	})
	.on('commandStatusChange', (guild, command, enabled) => {
		console.log(oneLine`
			Command ${command.groupID}:${command.memberName}
			${enabled ? 'enabled' : 'disabled'}
			${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
		`);
	})
	.on('groupStatusChange', (guild, group, enabled) => {
		console.log(oneLine`
			Group ${group.id}
			${enabled ? 'enabled' : 'disabled'}
			${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
		`);
	});
	
client.on('interactionCreate', async interaction => {
	console.log(interaction);
	if (!interaction.isCommand()) return;

	const { commandName: command } = interaction;
	
	if (command === 'ping') {
		await interaction.reply('Pong!');
	} else if (command === 'beep') {
		await interaction.reply('Boop!');
	} else if (command === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	}
});

client.setProvider(
	MongoClient.connect('mongodb://localhost:27017')
	.then(client => new MongoDBProvider(client, 'abot'))
).catch(console.error);

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['mud', 'MUD'],
        ['admin', 'Admin']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({ help: false, eval: false}) 
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.login(token)
