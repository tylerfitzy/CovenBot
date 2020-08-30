const db = require("quick.db");

const Discord = require("discord.js");
const { description } = require("./inventory");

module.exports = {
    name: "buy",
    description: "Buy item.",

    async run (client, message, args) {
        let purchase = args.join(" ");
        if(!purchase) return message.channel.send("No item specified.")
        let items = await db.fetch(message.author.id, {items: [] });
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

        let insufficientEmbed = new Discord.MessageEmbed()
        .setAuthor("Insufficient funds.", message.author.avatarURL)
        .setColor("RED")
        .setDescription("You do not have enough money to buy this item.")

        if(purchase === "Item1") {
            let price = 100
            if(amount < 100) return message.channel.send(insufficientEmbed);
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 100);
            db.push(message.author.id, "Item1");
            let purchaseSuccessful = new Discord.MessageEmbed()
            .setAuthor("Purchase successful.", message.author.avatarURL)
            .setDescription(`You bought 1 ${purchase} for ${price} credits.`)
            .setColor("GREEN")
            
            message.channel.send(purchaseSuccessful)
        }

        if(purchase === "Item2") {
            let price = 200
            if(amount < 200) return message.channel.send(insufficientEmbed);
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 200);
            db.push(message.author.id, "Item2");
            let purchaseSuccessful = new Discord.MessageEmbed()
            .setAuthor("Purchase successful.", message.author.avatarURL)
            .setDescription(`You bought 1 ${purchase} for ${price} credits.`)
            .setColor("GREEN")
            
            message.channel.send(purchaseSuccessful)
        }
    }
}