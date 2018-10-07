module.exports = {
	name: 'plainstime',
	aliases: ['cetustime', 'timecycle', 'wftime'],
	cooldown: 15,
	description:'Plains Time, Day or Night?',
	args: false,
	guildOnly:false,
	execute(message, args) {
		const request = require('request');
		request({
			url: 'https://api.warframestat.us/pc/cetusCycle',
			json: true,
		}, function(error, response, body) {
			console.log(error);
			console.log(body);
			const isDay = body.isDay;
			const shortstring = body.shortString;
			const sun = message.guild.emojis.find('name', 'sunny');
			const moon = message.guild.emojis.find('name', 'new_moon');
			if(isDay) message.channel.send(`Day on Cetus/Plains, Time Left:${shortstring}${sun}`);
			else message.channel.send(`Night on Cetus/Plains, Time Left:${shortstring}${moon}`);
		});
	},
};