module.exports = {
	name: 'robot',
	aliases: ['areyoubot', 'bot'],
	cooldown: 6,
	description:'existential questions',
	args: false,
	guildOnly:false,
	execute(message) {
		message.channel.send('No, I\'m not a robot....Or am I 😐');
	},
};