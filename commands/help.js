module.exports = {
	name: 'help',
	aliases: ['whatdo', 'cmdhelp'],
	cooldown: 5,
	args: false,
	description: 'Display info about bot',
	execute(message) {
		message.channel.send("TODO");
	},
};