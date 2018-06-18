const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

const Files = require(require('path').join(__dirname, 'js', 'Main.js')).Files;

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
