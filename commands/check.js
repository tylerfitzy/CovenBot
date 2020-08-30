const db = require("quick.db");
const ms = require("parse-ms");
const Discord = require("discord.js");

module.exports = {
    name: "check",
    description: "Checks Value of Knife",

    async run (client, message, args) {
        let amount = args[1]
        let user = message.mentions.users.first() || message.author

        let incorrectFormat = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Incorrect Format")
        .setDescription("Correct format: >addmoney {player} {amount}")
        .setTimestamp()

        db.add(`money_${message.guild.id}_${user.id}`, amount)

        let successEmbed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`Successfully added ${amount} credits to ${user.username}'s balance.`)
        .setTimestamp()

        message.channel.send(successEmbed)

        console.log(user.username)
        console.log(amount)
    }
}
