module.exports = {
	name: 'plainstime',
	aliases: ['cetustime', 'timecycle', 'wftime'],
	cooldown: 15,
	description:'Plains Time, Day or Night?',
	args: false,
	guildOnly:false,
	execute(message) {
		const request = require('request');
		request({
			url: 'https://api.warframestat.us/pc/cetusCycle',
			json: true,
		}, function(error, response, body) {
			const isDay = body.isDay;
			const shortstring = body.shortString;
			if(isDay) message.channel.send(`Day on Cetus/Plains, Time Left:${shortstring} :sunny: `);
			else message.channel.send(`Night on Cetus/Plains, Time Left:${shortstring} :full_moon:`);
		});
	},
};