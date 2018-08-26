module.exports = {
	name: 'n2',
	aliases: ['n2nitro', 'brendan', 'k', 'K'],
	cooldown: 6,
	description:'get a load of this guy',
	args: false,
	guildOnly:true,
	execute(message, args) {
		// message.channel.send('K');
		const kappa = message.guild.emojis.find('name', 'K_');
		message.channel.send(`${kappa}`);

	},
};