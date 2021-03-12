module.exports = {
	name: 'ping',
	aliases: [],
	cooldown: 3,
	description:'Ping!',
	args: false,
	guildOnly:false,
	execute(message) {
		// Pong
		message.channel.send('Pong.');
	},
};