module.exports = {
    name : "ready",
    once : true,

    execute(client) {
        console.log("Bot is Online.");
        client.user.setActivity("https://youtu.be/dQw4w9WgXcQ", { type: 'WATCHING' })
    }
}