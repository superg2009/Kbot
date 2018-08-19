const Discord = require('discord.js');
module.exports={
    name: 'activitychanger',
    aliases: ['activityswitch','change'],
    cooldown: 6,
    description:'switch it up',
    args: true,
    guildOnly:true,
    execute(message, args) {
        if(message.author.id===6944 || message.author.id===2019){
            const client = new Discord.Client();

            client.user.setActivity(args);
        }
        else{
            message.channel.send("Nice Try but you arent allowed to do that!");
        }
    },
};