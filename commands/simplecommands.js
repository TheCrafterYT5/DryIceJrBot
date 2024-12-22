// Category of simple commands with basic code logic
const moment = require('moment');

module.exports = {
    name: 'credits',
    aliases: ['gift', 'hi', 'invite', 'say', 'swank'],
    description: "Muestra los creditos del bot",
    execute(message, args, cmd, client, Discord) {

        if (cmd === 'hi') {
            message.reply(`Hola!! Me Llamo **${client.user}**` + `, soy un bot privado hecho para el servidor **${message.guild.name}**` + '. Al igual que muchos bots dispongo de funciones y comandos que pueden verse con `-help`, Pero cada vez dispongo de más!! Mira que puedo hacer...')
            return;
        }

        if (cmd === 'say') {
            if (message.author.bot) return;
            const SayMessage = message.content.slice(4).trim();
            if (!SayMessage) return message.reply('Debes escribir lo que quieras que yo repita Ej: `-say Dry Ice Jr es el mejor Club!!`');
            message.channel.send(`${SayMessage} | ${message.author.discriminator}`);
            setTimeout(() => { message.delete() }, 100)
            return;
        }

        if (message.channel.id === '729112106930143272' || message.channel.id === '830636260367794176' || message.channel.id === '717908264809005138') {
            if (cmd === 'credits') {
                const creditsEmbed = new Discord.MessageEmbed()
                    .setColor('#0ebcfb')
                    .setAuthor('Estos son mis créditos:', client.user.avatarURL())
                    .setThumbnail(client.user.avatarURL())
                    .addFields(
                        { name: 'Creador, Programador y Desarrollador del Bot:', value: '[𝕋𝕙𝕖ℂ𝕣𝕒𝕗𝕥𝕖𝕣𝕐𝕋𝟝 𝟚.𝟘#5155](http://youtube.com/TheCrafterYT5)', inline: true },
                        { name: 'Imagénes y Contenido Gráfico:', value: '[lefy#2060](https://www.twitch.tv/alonzo_bro)', inline: true },
                    )

                message.channel.send(creditsEmbed);
            }

            if (cmd === 'gift') {
                const newEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('Tabla de Contenido con las Personas Rickroleadas')
                    .setURL('http://bitly.com/98K8eH')
                    .setDescription('Lo siento Máster, pero Discord bloqueó el sitio que usaba para Rickrolear a la gente. De todas formas arriba :arrow_up: tienes un enlace para ver una tabla de las personas Rickroleadas por mí en el pasado <:flushed_sunglasses:855082167989960714>')
                    .setThumbnail(client.user.avatarURL())
                    .setImage('https://i.imgur.com/GjH09Gm.png')
                    .setTimestamp()
                    .setFooter('F Gift Command', client.user.avatarURL());

                message.channel.send(newEmbed);
            }

            if (cmd === 'invite') {
                message.channel.send(`Estoy programado para ser usado en el servidor **${message.guild.name}** no puedo ser añadido a otros servers :frowning:`);
            }

            if (cmd === 'swank') {
                const embed = new Discord.MessageEmbed()
                    .setColor('#0ebcfb')
                    .setURL('https://discord.js.org/')
                    .setAuthor(client.user.tag, client.user.avatarURL())
                    .setDescription(':sunglasses: Puedo Insertar Embeds y tú No')
                    .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/281/smiling-face-with-sunglasses_1f60e.png')
                    .setTimestamp()
                    .setFooter('Swank Command', client.user.avatarURL());

                const profileEmbed = new Discord.MessageEmbed()
                    .setColor('#0ebcfb')
                    .setTitle('Puedo tomar tu Foto de Perfil y tú no a mí :sunglasses:')
                    .setImage(message.author.avatarURL({ dynamic: true }));

                let userinfoget = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.member(message.author)

                const messages = ['Puedo usar Emojis Animados sin **Discord Nitro** y tú No :sunglasses:\n'
                    + '                    <a:perro_emocionado:833827868941090836> <a:patata_fumada:833835371803836466> <a:siuu_gato:833832163836166154> <a:cucaracha_sith:833834152566587392>',
                    embed, 'Tengo la Etiqueta de BOT y tú No :sunglasses:', '<a:gato_truco:833834155522392154> Estoy pensando en que presumirte...',
                    ':thinking: Que tal... si tú me presumes algo?', 'Puedo estar conectado **24/7** y tú No :sunglasses:',
                    'Puedo Expulsarte y tú No a Mí :sunglasses:', 'Puedo insertar más de 5 Emojis sin ser **Advertido** y tú No :sunglasses: :sunglasses: :sunglasses: :sunglasses: :sunglasses: :sunglasses:',
                    'Puedo Banearte y tú No a Mí :sunglasses:', 'Puedo Mutearte y tú No a Mí :sunglasses:',
                    'A, me olvidé que te iba a presumir <:sindrome_dog:833192121770573845>', profileEmbed, 'https://cdn.memegenerator.es/imagenes/memes/full/2/2/2020381.jpg',
                `Puedo saber cuando creastes tu cuenta (${moment(userinfoget.user.createdAt).format('L')}) y tú No la mía 😎`]

                const randomMessage = messages[Math.floor(Math.random() * messages.length)];

                // message.channel.send(randomMessage).then((sent) => {
                //     setTimeout(function () {
                //         sent.delete();
                //     }, 30000);
                // });
                message.channel.send(randomMessage);
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