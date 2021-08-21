require('dotenv').config();
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js'); 
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const mongoose = require('mongoose');
const User = require('./schemas/UserSchema');
const Note = require('./schemas/NoteSchema');

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
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();

mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
})
.then((m) => {
	console.log("Connected to DB");
})
.catch((err) => console.log(err));

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token)

// client.on('message', async (message) => {
// 	const newUser = await User.create({
// 		username: message.author.username,
// 		discordId: message.author.id,
// 	});
// });

// client.on('message', async(message)=>{
// 	if (message.author.bot) return;

// 	if (message.content.toLowerCase().startsWith('?createnote')) {
// 		const index = message.content.indexOf(' ');
// 		const description = message.content.slice(index + 1);
// 		try {
// 			await Note.create({
// 				description: description ,
// 				userId: message.author.id,
// 			});
// 			message.channel.send('Note saved.')
// 		} catch (err) {
// 			console.log(err);
// 			message.channel.send('Failed to save note.');
// 		}
// 	} else if (message.content.toLowerCase().startsWith('?getnotes')){
// 		const args = message.content.split(' ');
// 		if (args.length === 1) {
// 			const notes = await Note.find({userId: message.author.id});
// 			let description = '';
// 			for (const i in notes) {
// 				description += `${parseInt(i) + 1}) ${notes[i].description}\n`;
// 			}
// 			message.channel.send(description);
// 		} else {

// 		}
// 	}
// });



