module.exports = {
    name: 'server',
    aliases: ['server-info','server-stats'],
    cooldown: 5,
    args: false,
	description: 'Display info about this server.',
	execute(message) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};