// Commands related to Brawl Stars such as getting Club and Player stats
require('dotenv').config();
// const Brawlstars = require("brawlstars.js")
const token = process.env.BRAWLSTARS_TOKEN; //visit https://developer.brawlstars.com/ to get a token
// const clientBS = new Brawlstars.Client(token);

module.exports = {
    name: 'brawlstars',
    aliases: ['club', 'joinclub'],
    description: "idk aun",
    async execute(message, args, cmd, client, Discord) {
        // const player = await clientBS.getPlayer("#J828RQ0")
        // const club = await clientBS.getClub("#82GCU0V")

        if (message.channel.id === '729112106930143272' || message.channel.id === '830636260367794176' || message.channel.id === '717908264809005138') {
            if (cmd === 'brawlstars') {

                // const playerembed = new Discord.MessageEmbed()
                //     .setColor('#0ebcfb')
                //     .addFields(
                //         { name: 'Player Tag:', value: player.tag },
                //         { name: 'Player Club Tag:', value: player.club.tag },
                //         { name: 'Club Name', value: player.club.name }
                //     )
                //     .setFooter('BS Utility', client.user.avatarURL())

                // message.channel.send(playerembed);

                message.reply('Se ha desactivado este comando ya que la librería de BS en JavaScript dejó de existir :pensive:');

            }

            if (cmd === 'club') {

                // const ClubEmbed = new Discord.MessageEmbed()
                //     .setColor('#0ebcfb')
                //     .setTitle('Dry Ice Jr - #82GCU0V')
                //     .setURL('https://link.brawlstars.com/invite/band/en?tag=82GCU0V&token=fbdxbsg9')
                //     .setDescription('**Descripción:** `Únete a este Club Coopera y Disfruta! | Usar TODOS los tickets de Club League | ժוֹѕcоrժ.gg/EqQQ2xH`')
                //     .addFields(
                //         { name: ':trophy: Copas Totales', value: club.trophies, inline: true },
                //         { name: ':trophy: Copas Requeridas', value: club.requiredTrophies, inline: true },
                //         { name: ':busts_in_silhouette: Miembros', value: club.memberCount, inline: true },
                //         { name: ':crown: Presidente', value: 'TheCrafterYT5', inline: true },
                //         { name: ':lock: Tipo de Club', value: club.type, inline: true },
                //         { name: 'Región', value: "Ecuador", inline: true },
                //     )
                //     .addField('Más Información acerca de este Club?', 'Puedes usar el comando `!bclub #82GCU0V` en <#728041423923970139> para obtener más información y estadísiticas del Club')
                //     .setFooter('Dry Ice Jr Club Stats', client.user.avatarURL())
                // message.channel.send(ClubEmbed);
                // console.log(club.sortMembersByTrophies(player.name))
                message.reply('Se ha desactivado este comando ya que la librería de BS en JavaScript dejó de existir :pensive:');
            }

            if (cmd === 'joinclub') {
                const joinEmbed = new Discord.MessageEmbed()
                    .setColor('#0ebcfb')
                    .setAuthor('Únete con este enlace al club Dry Ice Jr:', client.user.avatarURL())
                    .setThumbnail('https://static.wikia.nocookie.net/brawlstars/images/0/01/Brawl_Stars_Logo.png/revision/latest?cb=20190105214233&path-prefix=es')
                    .setDescription('Enlace: https://link.brawlstars.com/invite/band/en?tag=82GCU0V&token=frwrjppn')
                message.channel.send(joinEmbed);
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