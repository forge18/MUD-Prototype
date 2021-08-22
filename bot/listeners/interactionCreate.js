const prefix = process.env.PREFIX;
const type = 'interaction';

exports.run = async function (client, interaction) {

	switch(true)
	{
		case interaction.isButton():
			buttonCommand(client, interaction);
			break;
		case interaction.isMessageComponent():
			componentCommand(client, interaction);
			break;
		case interaction.isSelectMenu():
			selectCommand(client, interaction);
			break;
		default:
            if( !client.commands.has(interaction.commandName) || !interaction.isCommand() ) return;
			messageCommand(client, interaction);
			break;
	}
}

async function buttonCommand(client, interaction)
{
    const buttonCommand = interaction.message.interaction.commandName;
    await client.commands.get(buttonCommand).execute(client, type, interaction);
}

async function componentCommand(client, interaction)
{

}

async function messageCommand(client, interaction) 
{
	try 
	{
		await client.commands.get(interaction.commandName).execute(client, type, interaction);
	} 
	catch (error) 
	{
		if(interaction.replied)
			await interaction.editReply({ 
				content: 'There was an error while executing this command!', 
				ephemeral: true 
			});
		else
			await interaction.reply({
				content: 'There was an error while executing this command!', 
				ephemeral: true 
			});
	}
}

async function selectCommand(client, interaction)
{
	
}