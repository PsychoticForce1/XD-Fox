const Discord = require('discord.js');
module.exports = {
    name:"help",
    alias:"h",
    description:"Displays the description of requested command",
    run:(client,message, args) => {
        try{
            let helpArg = args[0];
            let insensitiveHelpArg = helpArg.toLowerCase();
            if( client.commands.has(insensitiveHelpArg)){
                let descriptionMessage = client.descriptions.get(insensitiveHelpArg) ;
                message.channel.send(args[0] + ": " + descriptionMessage);
            }
            else{
                message.channel.send("Command not found");
            }   
        }
        catch(error){
            console.log(error);
        }
        
    }
}