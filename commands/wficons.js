module.exports = {
	name: 'wficons',
	aliases: ['icons'],
	cooldown: 15,
	description:'WTF are these Icons in W.F',
	args: false,
	guildOnly:false,
	execute(message) {
		message.channel.send('https://i.redd.it/9k9rsj3g7bf21.png');
	},
};
