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
            
            if (client.commands.has(cmd) || client.aliases.has(cmd)){
                let cmdToRun = client.commands.get(cmd) || client.aliases.get(cmd);
                cmdToRun.run(client, msg, args);
            } else {console.log("command not found")}
        }
    }
};