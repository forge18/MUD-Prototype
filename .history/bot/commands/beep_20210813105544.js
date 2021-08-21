const { Command } = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'beep',
            group: 'mud',
            memberName: 'beep',
            description: 'Replies with a Message.',
            examples: ['reply']
        });
    }

    run(msg) {
        return msg.say('Boop!');
    }
};