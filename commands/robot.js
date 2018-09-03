module.exports = {
	name: 'robot',
	aliases: ['areyoubot', 'bot'],
	cooldown: 6,
	description:'existetial questions',
	args: false,
	guildOnly:false,
	execute(message, args) {
		message.channel.send('No, I\'m not a robot....Or am I 😐');
	},
};