const request = require('request');
function checkNitain() {
	request({
		url: 'https://api.warframestat.us/pc/alerts',
		json: true,
	}, function(error, response, body) {
		console.log(error);
		let alerts = JSON.parse(body);
		alerts.array.forEach(element => {
			if(mission.reward.includes('Nitain Extract'))
				return element;
		});
		
	});
 }