const Discord = require('discord.js')

module.exports = {
    name:"wipe",
    aliases:[],
    description:"Delete the specified amount of previous messages",
    usableGuilds:["1069344128950874114"],
    run: async (client,message,args) => {
      client.channels.fetch(message.channelId).messages.fetch({ limit: args[0] }).then(messageFetched => {
        messageFetched.delete;
      })
      
    }
};