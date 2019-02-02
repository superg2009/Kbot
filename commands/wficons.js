
module.exports = {
	name: 'wficons',
	aliases: ['icons'],
	cooldown: 15,
	description:'WTF are these Icons in W.F',
	args: false,
	guildOnly:false,
	execute(message, args) {
        message.channel.send('https://i.redd.it/6mstow9ybyd21.jpg');
    }
}