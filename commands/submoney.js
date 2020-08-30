const db = require("quick.db");
const ms = require("parse-ms");
const Discord = require("discord.js");

module.exports = {
    name: "submoney",
    description: "Adds money to players balance",

    async run (client, message, args) {
        let amount = args[1]
        let user = message.mentions.users.first() || message.author

        let incorrectFormat = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Incorrect Format")
        .setDescription("Correct format: >submoney {player} {amount}")
        .setTimestamp()

        db.subtract(`money_${message.guild.id}_${user.id}`, amount)

        let successEmbed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`Successfully subtracted ${amount} credits from ${user.username}'s balance.`)
        .setTimestamp()

        message.channel.send(successEmbed)

        console.log(user.username)
        console.log(amount)
    }
}
