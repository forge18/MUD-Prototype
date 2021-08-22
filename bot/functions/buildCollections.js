const fs = require('fs');
const path = require('path');
const { Client, Collection } = require('discord.js');

module.exports = function(client) 
{
    client.aliases = new Collection();
    client.commands = new Collection();
    client.listeners = new Collection();

    const listenerFiles = fs.readdirSync(
        path.join(__dirname, '../listeners/')
    ).filter(file => file.endsWith('.js'));

    for (const file of listenerFiles) {
        let listener= require(path.join(__dirname, `../listeners/${file}`));
        let listenerName = file.split(".")[0];
        console.log(listener);
        client.on(
            listenerName, 
            (...args) => listener.run(client, ...args)
        );
    }

    const commands = [];
    const commandGroups = fs.readdirSync(
        path.join(__dirname, '../commands'), 
        {withFileTypes: true}).filter(group=>!group.isFile()
    );

    for (const group of commandGroups) {
            const commandSubGroups = fs.readdirSync(
                path.join(__dirname, `../commands/${group.name}`), 
                {withFileTypes: true}
            )
            .filter(
                subgroup=>!subgroup.isFile()
            );
        const commandGroupFiles = fs.readdirSync(
                path.join(__dirname, `../commands/${group.name}`), 
                {withFileTypes: true}
            )
            .filter(
                subgroup=>subgroup.isFile(), 
                file => file.endsWith('.js')
            );
            
        for (const groupFile of commandGroupFiles) {
            let command = require(
                path.join(__dirname, `../commands/${group.name}/${groupFile.name}`)
            );
            let commandName = groupFile.name.split(".")[0];
        
            client.commands.set(commandName, command);
        
            if(command.data) {
                commands.push(command.data.toJSON());
            }
        }

        for (const subgroup of commandSubGroups) {
            const commandFiles = fs.readdirSync(
                path.join(__dirname, `../commands/${group.name}/${subgroup.name}`), 
                {withFileTypes: true}
            )
                .filter(
                    file=>file.isFile(), 
                    file => file.endsWith('.js')
                );
            
            for (const file of commandFiles) {
                let command = require(path.join(__dirname, `../commands/${group.name}/${subgroup.name}/${file.name}`));
                let commandName = file.name.split(".")[0];
            
                client.commands.set(commandName, command);
            
                if(command.data) {
                    commands.push(command.data.toJSON());
                }
            }
        }
    }
    return commands;
}