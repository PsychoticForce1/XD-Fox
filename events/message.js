const { usableGuilds, aliases } = require("../commands/ping");

module.exports = {
    name : "messageCreate",
    once : false,

    execute(client, msg) {
        // Ignore all bots and dms
        if (msg.author.bot) return;
        if (msg.channel.type === "dm") return;

        let guilds;

        if(msg.content.startsWith(client.prefix)){
            let args = msg.content.slice(client.prefix.length).trim().split(/ +/g);
            let cmd = args.shift().toLowerCase();
            //console.log(msg);
            msg.guildID

            if(client.usableGuilds[0] == "all"){
                guilds == true;
               // console.log(usableGuilds[0]);
                console.log(aliases[0]);
            }
            console.log(guilds);
            if ((client.commands.has(cmd) || client.aliases.has(cmd)) && guilds){
                let cmdToRun = client.commands.get(cmd) || client.aliases.get(cmd);
                cmdToRun.run(client, msg, args);
            } else {console.log("command not found")}
        }
    }
};