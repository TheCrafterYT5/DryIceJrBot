// This module allows the bot to identify which messages has the bot's prefix so that the bot can respond
require('dotenv').config();
module.exports = (Discord, client, message) => {
    const prefix = process.env.PREFIX;
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(alias => alias.aliases && alias.aliases.includes(cmd));

    if (command) command.execute(message, args, cmd, client, Discord);
}