const Discord = require('discord.js')
module.exports = {
    name: 'restartbot',
    aliases:["restart"],
    description: 'Restart the Bot',
    run: async (client,message,args) => {
        try{
            if (message.author.id == "212660892620292106"){
                await message.channel.send("Please commit wait while the bot restarts.");
                process.exit()
            }else message.channel.send("You don't have permission to run this command");
        }catch(error){
            console.log(error);
        }
        
        
    }
};