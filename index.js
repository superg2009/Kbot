const fs = require('fs');
const Discord = require('discord.js');
const request = require('request');
// token and prefix are gathered from the environment allowing different keys per environment
// heroku local uses .env file provided by dev and heroku hosted uses config set with main account key
const token = process.env.token;
const prefix = process.env.prefix;

const client = new Discord.Client();
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();
// get all files in the commands folder that are javascript
const commandFiles = fs.readdirSync('./commands').filter(file=> file.endsWith('.js'));
// add commands from folder to pool of commands
for(const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
client.on('ready', () => {
	console.log('Ready!');
	checkNitain();
});
// when a new message is sent by DM or in a channel the bot is in this event fires
client.on('message', message => {
	/*
	if(message.content === 'is anyone alive') {
		message.channel.send('I am!');
	}
	*/
	// put all non prefixed reponse code above
	// if message doesn't have the prefix or is a bot itself do not reply
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	// get the arguments passed with command
	const args = message.content.slice(prefix.length).split('/ +/');
	// find the command name and lowercase it for processing
	const commandName = args.shift().toLowerCase();
	// see if command or an alias exists
	const command = client.commands.get(commandName)
    || client.commands.find(cmd=> cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;
	// check if command is restricted to guilds only
	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}
	// sanity check to check if command requires args ex a kick command
	if(command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (!timestamps.has(message.author.id)) {
		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}
	else {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}

	try{
		command.execute(message, args);
	}
	catch(error) {
		console.error(error);
		message.reply('there was an error tring to execute that command!');
	}
});
// when a new member joins this fires
client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find(ch => ch.name === 'general');
	if(!channel) return;
	channel.send(`Welcome to the Server, ${member}`);
});
// when a user leaves the guild
client.on('guildMemberRemove', member => {
	const channel = member.guild.channels.find(ch => ch.name === 'general');
	if(!channel) return;
	channel.send(`Goodbye, ${member} :(`);
});
// when the ban hammer is used on a member
client.on('guildBanAdd', member=>{
	const channel = member.guild.channels.find(ch => ch.name === 'general');
	if(!channel) return;
	channel.send(`get Keked, ${member} `);
});

 function checkNitain() {
	request({
		url: 'https://api.warframestat.us/pc/alerts',
		json: true,
	}, function(error, response, body) {
		console.log(error);
		let alerts = JSON.parse(body);
		
	});
 }
client.login(token);