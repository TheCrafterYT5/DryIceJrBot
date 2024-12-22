// Message related to a past Brawl Stars event
const channelMessages = require('../channel-messages');
const { Client, Attachment, Message, MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = client => {
    const divisionChannel = '892576668764475443'

    const divisionEmbed = new Discord.MessageEmbed()
        .setColor('#0ebcfb')
        .setTitle('INFORMACIÓN SOBRE EL LÍMITE DE MIEMBROS POR CLUB')
        .setThumbnail('https://i.imgur.com/VkEsESh.png')
        .setDescription('*Esta es una lista de información acerca de que se hará con el límite de 30 Miembros por Club...*\n'
            + '➤ El club se dividirá en 3 Clubs: `Dry Ice Jr`, `Dry Ice Team` y `Dry Ice EC`\n'
            + '➤ Cada miembro será trasladado a cada Club dependiendo de sus Cualidades (Ej: si eres de Ecuador vas a estar en `Dry Ice EC`)\n'
            + '➤ Se le asignará a cada Jugador actual del Club su respectivo Club antes de la división\n'
            + '➤ <@356560615281655808> va a ser el líder de `Dry Ice Jr`, los líderes de `Dry Ice EC` y `Dry Ice Team` van a ser Vices escogidos para liderar cada Club\n'
            + '➤ No entren en pánico <:xd_pikachu:833192061456089148>\n\n'
            + '**PREGUNTAS Y RESPUESTAS:**\n'
            + '⦿ **¿En que Club voy a estar si soy de otro país que no sea EC?**\nVas a permanecer en la cantera actual o ser trasladado a `Dry Ice Team`\n\n'
            + '⦿ **¿Que pasará con los 10 Miembros Faltantes que sobrarán?**\nNormalmente suelen haber inactivos, se expulsaran esos y quedaran libres esos puestos\n\n'
            + '⦿ **¿`Dry Ice Jr` Será el Club Principal?**\n<:no:837482420467007498>, todos estarán al mismo nivel al menos que con el tiempo se haga lo contrario\n\n'
            + '⦿ **¿Cuando se empezará a hacer esta división?**\n1 Semana antes de la Actualización de Noviembre (Actualmente la división ya ha Terminado)\n\n'
            + '*Si tienen más preguntas pueden Contactar con un <@&708772695604723813> o decirlo libremente en <#708147121618157631>*\n\n'
            + '**CLUBS:**\n'
            + '**-Dry Ice Jr (#82GCU0V)** Presidente: <@356560615281655808>\n'
            + '**-Dry Ice EC (#VJRPYU90)** Presidente: <@572473306976878614>\n'
            + '**-Dry Ice Team (#2G9P0YRYP)** Presidente: <@669766270517903370>\n')
        .setImage('https://i.imgur.com/y7WGzDz.png')
        .setFooter(`Este servidor es parte de los clubs "Dry Ice"  de Brawl Stars`, client.user.avatarURL())

    channelMessages(client, divisionChannel, divisionEmbed);

}