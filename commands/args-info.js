module.exports = {
	name: 'args-info',
	aliases: [],
	cooldown: 5,
	description: 'Information about the arguments provided.',
	args:true,
	guildOnly:false,
	execute(message, args) {
		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};