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
