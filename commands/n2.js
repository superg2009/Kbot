module.exports={
    name: 'n2',
    aliases: ['n2nitro','brendan'],
    cooldown: 6,
    description:'get a load of this guy',
    args: false,
    guildOnly:true,
    execute(message, args) {
        message.channel.send('K');
    },
};