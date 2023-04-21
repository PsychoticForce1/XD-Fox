const Discord = require('discord.js')

module.exports = {
    name:"ping",
    aliases:["p"],
    description:"Calculate the ping to the Bot",
    usableGuilds:["all"],
    run: async (client,message,args) => {
      const m = await message.channel.send("Calculating Speed of Light...");
      m.edit(`Bot Ping: ${m.createdTimestamp - message.createdTimestamp}ms \nIf it matters, API Ping: ${Math.round(client.ws.ping)}ms`);
      
    }
};