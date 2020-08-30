const db = require("quick.db");

const Discord = require("discord.js");

module.exports = {
    name: "inv",
    description: "View inventory",
    
    async run (client, message, args) {
        let items = await db.fetch(message.author.id)
        if(items === null) items = "None"

        const Embed = new Discord.MessageEmbed()
        .addField("Inventory", items)
        .setColor("PURPLE")
        .setFooter("Inventory")
        .setTitle(`${message.author.username}'s Inventory`)
        .setTimestamp()

        message.channel.send(Embed);
    }
}