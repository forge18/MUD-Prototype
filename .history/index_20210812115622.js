const Discord = require('discord.js-commando');
require('dotenv').config();

const owner = process.env.OWNER;
const prefix = process.env.PREFIX;
const token = process.env.TOKEN;

const client = new Commando.Client({
    commandPrefix: prefix,
    owner: owner
});

const path = require('path');

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['mud', 'MUD'],
        ['admin', 'Admin']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({ help: false, eval: false}) 
    .registerCommandsIn(path.join(__dirname, 'commands'));

const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

client.setProvider(
    sqlite.open({
        filename: 'database.db',
        driver: sqlite3.Database
    })
    .then(db => new Commando.SQLiteProvider(db))
)
.catch(console.server);

client.login(token)


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix.length) !==0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        message.reply("pong!");
    }
});

x