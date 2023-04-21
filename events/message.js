const { usableGuilds, aliases } = require("../commands/ping");

module.exports = {
    name : "messageCreate",
    once : false,

    execute(client, msg) {
        // Ignore all bots and dms
        if (msg.author.bot) return;
        if (msg.channel.type === "dm") return;


        
        if(msg.content.startsWith(client.prefix)){
            let args = msg.content.slice(client.prefix.length).trim().split(/ +/g);
            let cmd = args.shift().toLowerCase();
            
            
            if(usableGuilds[0] == "all"){
                if (client.commands.has(cmd) || client.aliases.has(cmd)){

                    let cmdToRun = client.commands.get(cmd) || client.aliases.get(cmd);
                        cmdToRun.run(client, msg, args);
                } else {console.log("command not found")}
                 
            }else{
                if (client.commands.has(cmd) || client.aliases.has(cmd)){

                    if(usableGuilds.includes(msg.guildId)){
                        let cmdToRun = client.commands.get(cmd) || client.aliases.get(cmd);
                        cmdToRun.run(client, msg, args);
                    }
                } else {console.log("command not found")}
            }
            
            
        }
    }
};