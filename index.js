const { Client, Collection } = require("discord.js");
const { prefix, token } = require("./config.json");
const {Intents} = require('discord.js');
const Discord = require("discord.js");
const bot = new Client({ intents: [Intents.FLAGS.GUILDS] });

bot.prefix = prefix;
bot.commands = new Collection();

//bot.commands.set("help", require("./commands/help.js"));

bot.on('message', msg => {
   if (msg.author.bot) return;
   if (msg.content.startsWith(settings.prefix)) return;

   if (msg.content.startsWith(settings.prefix + "ping")) {
     msg.reply("Pong!") 
   }
});

bot.on("ready", () => require("./events/ready.js")());
//bot.on("message", message => require("./events/message.js")(message));

bot.login(process.env.TOKEN);
