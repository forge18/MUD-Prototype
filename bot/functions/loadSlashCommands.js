require('dotenv').config();
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

module.exports = function(commands) 
{
    const clientId = process.env.TEST_CLIENT_ID;
    const guildId = process.env.TEST_GUILD_ID;

    const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);
    (
        async () => {
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
        }
    )();
}