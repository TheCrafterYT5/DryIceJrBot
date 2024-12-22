// Allows the bot to retrieve information about the user and display it
const moment = require('moment');

module.exports = {
    name: 'myinfo',
    aliases: ['serverinfo'],
    description: "Para mostrar estadisticas e informacion de un usuario",
    execute(message, args, cmd, client, Discord) {
        if (message.channel.type === 'dm') {
            message.reply('Este comando se lo usa en el Servidor: https://discord.gg/EqQQ2xH');
            return;
        };

        if (message.channel.id === '729112106930143272' || message.channel.id === '830636260367794176' || message.channel.id === '717908264809005138') {

            let userinfoget = message.guild.member(message.author)

            if (cmd === 'myinfo') {
                if (args[0]) {
                    message.reply('Por temas de Privacidad no puedo mostrarte el perfil de alguien más <:yo:862321297606311938>').then((sent) => {
                        setTimeout(function () {
                            sent.delete();
                            message.delete();
                        }, 15000);
                    });
                    return;
                }

                const myInfoEmbed = new Discord.MessageEmbed()
                    .setColor('#0ebcfb')
                    .setAuthor(`${userinfoget.user.tag}`, userinfoget.user.displayAvatarURL({ dynamic: true }))
                    .addFields(
                        {
                            name: `Mención de Usuario:`,
                            value: `<@${userinfoget.id}>`
                        },
                        {
                            name: `Tu Etiqueta:`,
                            value: `#${message.author.discriminator}`
                        },
                        {
                            name: `ID de Usuario:`,
                            value: `${userinfoget.id}`
                        },
                        {
                            name: 'Te uniste a este Server:',
                            value: `${moment(userinfoget.joinedAt).format('LLLL')}\n`
                                + `${moment(userinfoget.joinedAt).startOf('minute').fromNow()}`
                        },
                        {
                            name: 'Te uniste a Discord:',
                            value: `${moment(userinfoget.user.createdAt).format('LLLL')}\n`
                                + `${moment(userinfoget.user.createdAt).startOf('minute').fromNow()}`
                        },
                        {
                            name: 'Tu Status:',
                            value: `${userinfoget.presence.status}`
                        },
                        {
                            name: 'Imagen de Perfil:',
                            value: message.author.displayAvatarURL({ dynamic: true })
                        }
                    )
                    .setImage(message.author.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()
                    .setFooter('User Information', client.user.avatarURL());

                message.channel.send(myInfoEmbed);

            }

            if (cmd === 'serverinfo') {
                const guild = client.guilds.cache.get('708147121169105004');
                const bots = '10'

                const serverInfoEmbed = new Discord.MessageEmbed()
                    .setColor('#0ebcfb')
                    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                    .addFields(
                        {
                            name: `Nombre del Servidor`,
                            value: `${message.guild.name}`
                        },
                        {
                            name: `Miembros Totales:`,
                            value: `${guild.memberCount.toLocaleString()}`
                        },
                        {
                            name: `Usuarios Reales:`,
                            value: `${guild.memberCount.toLocaleString() - bots}`
                        },
                        {
                            name: `Bots:`,
                            value: bots
                        },
                        {
                            name: `ID del Servidor:`,
                            value: message.guild.id
                        },
                        {
                            name: 'Creación del Servidor:',
                            value: `${moment(message.guild.createdAt).format('LLLL')}\n`
                                + `${moment(message.guild.createdAt).startOf('minute').fromNow()}`
                        },
                        {
                            name: 'Te uniste a este Servidor:',
                            value: `${moment(userinfoget.joinedAt).format('LLLL')}\n`
                                + `${moment(userinfoget.joinedAt).startOf('minute').fromNow()}`
                        },
                        {
                            name: 'Status:',
                            value: 'Privado'
                        },
                        {
                            name: 'Ícono del Servidor:',
                            value: message.guild.iconURL()
                        }
                    )
                    .setImage(message.guild.iconURL({ dynamic: true }))
                    .setTimestamp()
                    .setFooter('Server Information', client.user.avatarURL());

                message.channel.send(serverInfoEmbed).then((sent) => {
                    setTimeout(function () {
                        sent.delete();
                        message.delete();
                    }, 60000);
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