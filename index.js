const Discord = require("discord.js");
const fs = require("fs");
require("dotenv").config();
//const mongoose = require("./database/mongoose");
//mongoose.init();

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildMessageReactions,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.Guilds
    ]
});
const { exec } = require("child_process");

client.prefix = "show";
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.descriptions = new Discord.Collection();
client.usableGuilds = new Discord.Collection();

let commandFiles = fs.readdirSync("commands").filter(file => file.endsWith(".js"));
    commandFiles.forEach(file => {
        let command = require(`./commands/${file}`);
        client.commands.set(command.name,command);
        if (command.aliases){
            command.aliases.forEach(alias => {
                client.aliases.set(alias, command)
            })
        }
        client.descriptions.set(command.name,command.description);
        
        if (command.usableGuilds){
            command.usableGuilds.forEach(guild => {
                client.usableGuilds.set(guild, command)
            })
        }
        
    });
let eventFiles = fs.readdirSync("events").filter(file => file.endsWith(".js"));
eventFiles.forEach(file => {
    let event = require(`./events/${file}`);
    
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(client, ...args));
    }
});

// exec("ls -la", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// });

//screen -S minecraft -X stuff "say hi\n"


client.login(process.env.TOKEN);