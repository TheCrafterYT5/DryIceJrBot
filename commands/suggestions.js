// This command allows the bot to publish suggestions in a specific channel from users for the bot or the server
module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestion', 'sugerir', 'sugerencia'],
    description: 'Para crear sugerencias',
    execute(message, args, cmd, client, Discord) {
        if (message.channel.type === 'dm') {
            message.reply('Este comando se lo usa en el Servidor: https://discord.gg/EqQQ2xH');
            return;
        };

        const channel = message.guild.channels.cache.find(c => c.id === '838546539239702570');
        const suggestChannel = message.guild.channels.cache.find(sc => sc.id === '729112106930143272');

        if (message.channel.id === '729112106930143272' || message.channel.id === '830636260367794176' || message.channel.id === '717908264809005138') {

            if (!args[0]) return message.channel.send(':x: Debes escribir lo que quieras sugerir Ej: `-suggest Sugiero que hayan mas roles de videojuegos como: Clash Of Clans y Wild Rift`').then((sent) => {
                setTimeout(function () {
                    sent.delete();
                    message.delete();
                }, 15000);
            });

            let messageArgs = args.join(' ');
            const embed = new Discord.MessageEmbed()
                .setColor('#0ebcfb')
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(messageArgs)
                .setTimestamp()
                .setFooter('Sugerencia');

            if (message.channel === suggestChannel) {
                channel.send(embed).then((msg) => {
                    msg.react('✅');
                    msg.react('❌');
                    message.delete();
                }).catch((err) => {
                    throw err;
                });
            } else {
                message.channel.send(':x: Las sugerencias del servidor o del bot se hacen en <#729112106930143272> no aquí').then((sent) => {
                    setTimeout(function () {
                        sent.delete();
                        message.delete();
                    }, 10000);
                });
            }
        } else {
            message.reply(':no_entry_sign: Este comando se lo usa en el canal <#729112106930143272> No aquí').then((sent) => {
                setTimeout(function () {
                    sent.delete();
                    message.delete();
                }, 10000);
            });
        }
    }
}