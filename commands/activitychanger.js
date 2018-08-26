const Discord = require('discord.js');
module.exports = {
	name: 'activitychanger',
	aliases: ['activityswitch', 'change'],
	cooldown: 6,
	description:'switch it up',
	args: true,
	guildOnly:true,
	execute(message, args) {
		if(message.author.id === 211916955228045324 || message.author.id === 156968599997775872) {
			const client = new Discord.Client();
			client.user.setStatus('online');
			client.user.setActivity('built with hate by superg2009');
		}
		else{
			message.channel.send('Nice Try but you arent allowed to do that!');
		}
	},
};