module.exports = {
    name: 'args-info',
    aliases: [],
    cooldown: 5,
    description: 'Information about the arguments provided.',
    args:true,
    guildOnly:false,
    execute(message, args) {
        if (args[0] === 'foo') {
            return message.channel.send('bar');
        }
        message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
    },
};