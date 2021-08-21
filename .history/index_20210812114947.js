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
    // Registers your custom command groups
    .registerGroups([

    ])

    // Registers all built-in groups, commands, and argument types
    .registerDefaults()
        
    // Registers all of your commands in the ./commands/ directory
    .registerCommandsIn(path.join(__dirname, 'commands'));



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

client.login(token)