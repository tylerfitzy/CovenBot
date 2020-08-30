const Discord = require("discord.js");

module.exports = {
    name: "store",
    description: "Show store.",

    async run (client, message, args) {
        
        const Embed = new Discord.MessageEmbed()
        .setTitle("Coven Shop")
        .setDescription(`Item1 - 100 Credits \n Item2 - 200 Credits`)
        .setColor("PURPLE")
        .setTimestamp()

        message.channel.send(Embed);
    }
}