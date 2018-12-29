const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("528705129625550849")
setInterval(function() {
channel.send(`mohmoudxd`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
