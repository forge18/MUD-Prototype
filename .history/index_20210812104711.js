const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

const prefix = process.env.PREFIX;

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
    if (message.content.startsWith("ping")) {
        message.channel.send("pong!");
    }
});

client.login()