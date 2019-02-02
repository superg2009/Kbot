module.exports = {
	name: 'gmod',
	aliases: ['collection,gmodaddons'],
	cooldown: 15,
	description:'whats the link for Gbananas again?',
	args: false,
	guildOnly:false,
	execute(message, args) {
        message.channel.send('https://steamcommunity.com/sharedfiles/filedetails/?id=1589363235');
    }
}