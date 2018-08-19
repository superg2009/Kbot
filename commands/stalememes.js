module.exports={
    name: 'stalememe',
    aliases: ['deadmeme', 'cancer'],
    cooldown: 10,
    description:'serves a random dead meme',
    args: false,
    guildOnly:true,
    execute(message, args) {
        let memeArray = ['Here come dat boi', 'do you know da wae', 'dicks out for harambe', 'tide pods are fun', 'its everyday bro!', 'perfectly balanced as all things should be', 'somebody toucha my spagett', 'skidaddle skidoodle your dick is now a noodle', 'despacito 2 confirmed', `I'll have two number 9's, a number 9 large, a number 6 with extra dip, a number 7, two number 45's, one with cheese, and a large soda.﻿`, 'damn daniel', 'Nani!!', 'don\'t talk to me or my son ever again'];
        let selection = memeArray[Math.floor(Math.random()*memeArray.length)];
        message.channel.send(selection);
    },
};