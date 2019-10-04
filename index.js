const { Client, RichEmbed } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log(`Bot is ready as: ${client.user.tag}`);
  client.user.setStatus('dnd');

  console.log(client.user.presence.status);
});

client.on('message', msg => {
  // Receiving the message
  console.log(msg.content);
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }

  if (msg.content === 'hello' || msg.content === 'hi') {
    msg.channel.send(`Hello ${msg.author}`);
  }

  if (msg.content.includes('!test')) {
    msg.channel.send(`Glad your are testing`);
  }

  if (msg.content.includes('!fazt')) {
    msg.channel.send('https://www.youtube.com/fazttech');
    msg.channel.send('https://www.youtube.com/faztcode');
  }

  if (msg.content.includes('!pretty')) {
    const embed = new RichEmbed()
      .setTitle('A pretty Message')
      .setColor('RED')
      .setAuthor('Falz', 'url_image');
    msg.channel.send(embed)
  }

});

client.login('NjI5MzE4MzE3OTM2NzM4MzM1.XZYCdQ.Tulgden-FKW_8ZADyNwTL3PiGtI');