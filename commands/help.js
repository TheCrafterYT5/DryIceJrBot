// The help command, the bot can display the commands it currently supports
module.exports = {
    name: 'help',
    aliases: ['help_commands', 'help_administrator', 'help_music', 'help_brawlstars'],
    description: "Muestra una ayuda",
    execute(message, args, cmd, client, Discord) {

        if (message.channel.id === '729112106930143272' || message.channel.id === '830636260367794176' || message.channel.id === '717908264809005138') {
            if (cmd === 'help') {
                const helpEmbed = new Discord.MessageEmbed()
                    .setColor('#0ebcfb')
                    .setAuthor('Esto es lo que puedo hacer:', client.user.avatarURL())
                    .setThumbnail(client.user.avatarURL())
                    .addFields(
                        { name: 'Comandos:', value: '`-help_commands`', inline: true },
                        { name: 'Administración:', value: '`-help_administrator`', inline: true },
                        { name: 'Música:', value: '`-help_music`', inline: true },
                        { name: 'BrawlStars:', value: '`-help_brawlstars`', inline: true },
                        { name: 'Créditos:', value: '`-credits`', inline: true },
                    )

                message.channel.send(helpEmbed);
            }

            if (cmd === 'help_commands') {
                const commandsEmbed = new Discord.MessageEmbed()
                    .setColor('#0ebcfb')
                    .setAuthor('Estos son mis comandos:', client.user.avatarURL())
                    .setThumbnail('https://i.imgur.com/BiYnuWr.png')
                    .setDescription('`-hi`\n'
                        + 'Saluda al Bot :)\n\n'
                        + '`-googleimage [search]` - NO OPERATIVO\n'
                        + 'Busca Imagénes, te mostaré el primer resultado de tu búsqueda\n\n'
                        + '`-akinator`\n'
                        + 'Juega a Akinator!! gracias a la API `aki-api`\n\n'
                        + '`-say [message]`\n'
                        + 'Haz que yo repita el contenido de tu mensaje\n\n'
                        + '`-suggestions [message]`\n'
                        + 'Haz una sugerencia para Mí o para el Servidor\n\n'
                        + '`-myinfo`\n'
                        + 'Muestra tu información de usuario\n\n'
                        + '`-serverinfo`\n'
                        + 'Muestra la información del Servidor\n\n'
                        + '`-swank`\n'
                        + 'Te presumo de algo que no puedes hacer XD\n\n'
                        + '`-invite`\n'
                        + 'Invita al bot a tu server?\n\n'
                        + '`-gift`\n'
                        + 'Quieres un regalito?'
                    )

                message.channel.send(commandsEmbed);
            }

            if (cmd === 'help_administrator') {
                const adminEmbed = new Discord.MessageEmbed()
                    .setColor('#0ebcfb')
                    .setAuthor('Estos son mis comandos de Administrador:', client.user.avatarURL())
                    .setThumbnail(client.user.avatarURL())
                    .setDescription('`-kick [user]`\n'
                        + 'Expulsa a un usuario de este server\n\n'
                        + '`-ban [user]`\n'
                        + 'Banea a un usuario de este server\n\n'
                        + '`-mute [user]`\n'
                        + 'Mutea a un usuario\n\n'
                        + '`-tempmute [user] [time]`\n'
                        + 'Mutea temporalmente a un usuario\n\n'
                        + '`-unmute [user]`\n'
                        + 'Desmutea a un usuario\n\n'
                        + '`-clear [number]`\n'
                        + 'Elimina una cierta cantidad de mensajes'
                    )

                message.channel.send(adminEmbed);
            }

            if (cmd === 'help_music') {
                const musicEmbed = new Discord.MessageEmbed()
                    .setColor('#0ebcfb')
                    .setAuthor('Estos son mis comandos de Música:', client.user.avatarURL())
                    .setThumbnail('https://i.imgur.com/fyfQnEv.png')
                    .setDescription('`-play [name/link]`\n'
                        + 'Reproduce tu canción ya sea una palabra clave o un link\n\n'
                        + '`-stop`\n'
                        + 'Para la reproducción de la canción y me voy del canal de voz\n\n'
                        + '`-skip`\n'
                        + 'Avanza hasta la siguiente canción en la lista de Reproducción'
                    )

                message.channel.send(musicEmbed);
            }

            if (cmd === 'help_brawlstars') {
                const bsEmbed = new Discord.MessageEmbed()
                    .setColor('#0ebcfb')
                    .setAuthor('Estos son mis comandos de Brawl Stars:', client.user.avatarURL())
                    .setThumbnail('https://static.wikia.nocookie.net/brawlstars/images/0/01/Brawl_Stars_Logo.png/revision/latest?cb=20190105214233&path-prefix=es')
                    .setDescription('`-club`\n'
                        + 'Obten un pequeño resumen de Estadisticas e información del Club **Dry Ice Jr**\n\n'
                        + '`-joinclub`\n'
                        + 'Inserto un enlace para que te puedas unir al club\n\n'
                        + '`-chbrawler`\n'
                        + 'Escojo un Brawler de forma Aleatoria por tí'
                    )

                message.channel.send(bsEmbed);
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

//     const newEmbed = new Discord.MessageEmbed()
//     .setColor('#0099ff')
//     .setTitle('Some title')
//     .setURL('https://discord.js.org/')
//     .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
//     .setDescription('Some description here')
//     .setThumbnail('https://i.imgur.com/wSTFkRM.png')
//     .addFields(
// 	    { name: 'Regular field title', value: 'Some value here' },
// 	    { name: '\u200B', value: '\u200B' },
// 	    { name: 'Inline field title', value: 'Some value here', inline: true },
// 	    { name: 'Inline field title', value: 'Some value here', inline: true },
//     )
//     .addField('Inline field title', 'Some value here', true)
//     .setImage('https://i.imgur.com/wSTFkRM.png')
//     .setTimestamp()
//     .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

//     message.channel.send(newEmbed);
//     }
// }