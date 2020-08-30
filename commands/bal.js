const db = require("quick.db");

const Discord = require("discord.js");

module.exports = {
    name: "bal",
    description: "Displays user's credit balance.",

    async run (client, message, args) {
        let user = message.mentions.users.first() || message.author;

        let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
        if(bal === null) bal = 0;

        let Embed = new Discord.MessageEmbed()
        .setTitle(`${user.username}'s Balance`)
        .setDescription(`Credits: ${bal}`)
        .setColor("PURPLE")

        message.channel.send(Embed);
    }
}