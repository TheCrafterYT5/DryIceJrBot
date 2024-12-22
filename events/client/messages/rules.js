// Allows the bot to send and update a rules embed message in a specific channel
const channelMessages = require('../channel-messages');
const { Client, Attachment, Message, MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = client => {
    const rulesChannel = '729135164332048424'
    const rulesChannelNew = '733732459966890085'
    const serverUseChannel = '708765775736864798'
    const serverUseChannelNew = '733732433274601552'

    const rulesEmbed = new Discord.MessageEmbed()
        .setColor('#0ebcfb')
        .setTitle('Reglas del servidor')
        .setThumbnail('https://i.imgur.com/DmEELlH.png')
        .setDescription('Estas son las reglas del servidor, síguelas con Cautela. **La incumplición de una de estas reglas puede conllevarte a un baneo o un tipo de sanción dependiendo de la gravedad de este**\n\n'
            + '⦿ Sé Amable con los otros usuarios\n'
            + '⦿ No Insultes a usuarios desconocidos\n'
            + '⦿ No envíes contenido Inapropiado o NSFW\n'
            + '⦿ No decir palabras inapropiadas\n'
            + '⦿ Ayudar a los otros usuarios cuando pidan ayuda o si son nuevos\n'
            + '⦿ Prohibido hacer Pings/Menciones inecesarias o Pingear/Mencionar de forma constante\n'
            + '⦿ Usar los canales como se deben usar, lee <#708765775736864798> para más\n'
            + '⦿ **Prohibido** compartir *filtraciones* o *rumores* acerca de Brawl Stars\n'
            + '⦿ **PROHIBIDO** Comentar cosas críticas o hacer Spoilers de Nuevas Películas o Series que vayan saliendo, en el caso de que quieras compartir un meme o hablar acerca de esto envía el mensaje como **Spoiler**')
        .setFooter('Este servidor es parte del club "Dry Ice Jr" de Brawl Stars', client.user.avatarURL())

    channelMessages(client, rulesChannel, rulesEmbed);
    channelMessages(client, rulesChannelNew, rulesEmbed);

    const useEmbed = new Discord.MessageEmbed()
        .setColor('#0ebcfb')
        .setTitle('Aquí está La Guía de como usar el servidor y para que sirven cada uno de sus canales, leelos bien!')
        .setThumbnail('https://i.imgur.com/VkEsESh.png')
        .setDescription('**Información Importante**\n'
            + '➤ Los Roles de cada miembro del servidor son asignados dependiendo del rango de los clubs "Dry Ice" de Brawl Stars (Ej: Si eres "Veterano" tu rol del servidor va a ser de <@&708772795303067658>)\n'
            + '➤ Tu Apodo del Servidor será cambiado por tu nombre de BS en el caso de que no coincidan\n'
            + '➤ Este servidor se divide en 2 grupos <@&830609544040284190> y <@&813204410875379742> dependiendo si estas o no en el Club\n\n'
            + '__***Usos de los Canales del Servidor:***__\n\n'
            + '⦿ <#837833273257754625> Canal de Estadísiticas en donde muestra los Miembros Totales existentes en este servidor')

        .addFields(
            {
                name: 'IMPORTANT INFO', value: '⦿ <#729135164332048424> Ahí Podrás leer las reglas del servidor\n'
                    + '⦿ <#708765775736864798> Se explica a que va el servidor y sus usos\n'
                    + '⦿ <#708746434236776551> Ahí se envían los anuncios del servidor, del bot del server o de los Clubs de BS\n'
                    + '⦿ <#917545286497357854> Canal donde se hacen las Bienvenidas/Despedidas del Servidor'
            },
            {
                name: 'ROLES', value: '⦿ <#838210438637944882> Escoge tus roles de VideoJuegos ahí\n'
                    + '⦿ <#864907126756081684> Escoge tu rol de Color de Nombre en ese canal'
            },
            {
                name: 'BRAWL STARS', value: '⦿ <#708147121618157631> En este Chat es donde se conversan solo de temas de Brawl Stars o el Club\n'
                    + '⦿ <#708817247602212925> Canal Usado Para Organizar y Crear Grupos para subir Copas\n'
                    + '⦿ <#942221892343980073> Ahí puedes buscar gente para jugar Club League en **Dry Ice Jr**'
            },
            {
                name: 'SOCIAL', value: '⦿ <#830972904295366686> Ahí te puedes presentar y ver presentaciones de otros usuarios\n'
                    + '⦿ <#840753832736325723> En ese canal se Felicitan a los Cumpleañeros del día!\n'
                    + '⦿ <#708812894858510396> Canal para enviar y conversar acerca de cosas no relacionadas con Brawl Stars\n'
                    + '⦿ <#708817193080717393> **Puede haber Contenido sensible** | Canal para compartir y enviar Memes\n'
                    + '⦿ <#833095592150302750> En ese canal puedes sugerir Emojis Personalizados para el servidor'
            },
            {
                name: 'BOTS', value: '⦿ <#838546539239702570> Canal donde se muestran las sugerencias pendientes del bot <@816382848037683251> o del Servidor\n'
                    + '⦿ <#729112106930143272> Ahí podrás usar los comandos del Servidor e interactuar con <@&718271813305499718>\n'
                    + '⦿ <#728041423923970139> Ahí podrás ver tus estadísticas y perfil de BS\n'
                    + '⦿ <#832502822888407100> Canal de Entretenimiento para contar desde el 1 hasta el ∞ y ver hasta donde se puede llegar'

            },
            {
                name: 'SPAM', value: '⦿ <#739978094747582485> Ahí se Notifica los Directos de Los Streamers del Servidor\n'
                    + '⦿ <#739978051600777248> Ahí se anuncian los vídeos de Los Youtubers del Servidor'
            },
            {
                name: 'VOICE CHANNELS', value: '⦿ <#708147121618157632> Canal de voz general del Servidor\n'
                    + '⦿ <#708746702584283176> Chat de voz usado para grupo de batallas amistosas\n'
                    + '⦿ <#708746595671343195> y <#726955435667488808> Chats de voz usados para subir copas con tu grupo\n'
                    + '⦿ <#708746742895738931> Canal de voz usado para eventos especiales del Servidor o Club\n'
                    + '⦿ <#708814229872050267> Canal de voz al cual eres trasladado si hay inactividad tuya en un canal de voz'
            },
            { name: 'SUPERCELL ANNOUNCEMENTS', value: '⦿ <#708755343194456104> Canal en donde se muestra las novedades de Brawl Stars' },
            {
                name: 'Plantilla del Servidor:', value: 'Si quieres ver la plantilla del servidor o crear uno como este, '
                    + 'puedes obtenerla en este enlace: https://discord.new/QFxKh99n5psV'
            }
        )
        .setFooter('Este servidor es parte del club "Dry Ice Jr" de Brawl Stars', client.user.avatarURL())

    channelMessages(client, serverUseChannel, useEmbed);

    const useNewEmbed = new Discord.MessageEmbed()
        .setColor('#0ebcfb')
        .setTitle('Aquí está La Guía de como usar el servidor y para que sirven cada uno de sus canales, leelos bien!')
        .setThumbnail('https://i.imgur.com/VkEsESh.png')
        .setDescription('**Información Importante**\n'
            + '➤ Los Roles de cada miembro del servidor son asignados dependiendo del rango del club "Dry Ice Jr" de Brawl Stars (Ej: Si eres "Veterano" tu rol del servidor va a ser de <@&708772795303067658>)\n'
            + '➤ Tu Apodo del Servidor será cambiado por tu nombre de BS en el caso de que no coincidan\n'
            + '➤ Este servidor se divide en 2 grupos <@&830609544040284190> y <@&813204410875379742> dependiendo si estas o no en el Club\n\n'
            + '__***Usos de los Canales del Servidor:***__\n\n'
            + '⦿ <#837833273257754625> Canal de Estadísiticas en donde muestra los Miembros Totales existentes en este servidor')

        .addFields(
            {
                name: 'IMPORTANT INFO', value: '⦿ <#733732459966890085> Ahí Podrás leer las reglas del servidor\n'
                    + '⦿ <#733732433274601552> Se explica a que va el servidor y sus usos\n'
                    + '⦿ <#708746434236776551> Ahí se envían los anuncios del servidor, del bot del server o del Club de BS'
            },
            {
                name: 'ROLES', value: '⦿ <#838210438637944882> Escoge tus roles de VideoJuegos ahí\n'
                    + '⦿ <#864907126756081684> Escoge tu rol de Color de Nombre en ese canal'
            },
            {
                name: 'BRAWL STARS', value: '⦿ <#708147121618157631> Es el Chat General del Servidor en donde se conversan solo de temas del server o de Brawl Stars\n'
                    + '⦿ <#708817247602212925> Canal Usado Para Organizar y Crear Grupos para subir Copas'
            },
            {
                name: 'SOCIAL', value: '⦿ <#830972904295366686> Ahí te puedes presentar y ver presentaciones de otros usuarios\n'
                    + '⦿ <#840753832736325723> En ese canal se Felicitan a los Cumpleañeros del día!\n'
                    + '⦿ <#708812894858510396> Canal para enviar y conversar acerca de cosas no relacionadas con Brawl Stars\n'
                    + '⦿ <#832425847142219826> Un Canal interchat en donde puedes conversar con otros usuarios de otros servers\n'
                    + '⦿ <#708817193080717393> **Puede haber Contenido sensible** | Canal para compartir y enviar Memes\n'
                    + '⦿ <#833095592150302750> En ese canal puedes sugerir Emojis Personalizados para el servidor'
            },
            {
                name: 'BOTS', value: '⦿ <#838546539239702570> Canal donde se muestran las sugerencias pendientes del bot <@816382848037683251> o del Servidor\n'
                    + '⦿ <#729112106930143272> Ahí podrás usar los comandos del Servidor e interactuar con <@&718271813305499718>\n'
                    + '⦿ <#728041423923970139> Ahí podrás ver tus estadísticas y perfil de BS\n'
                    + '⦿ <#832502822888407100> Canal de Entretenimiento para contar desde el 1 hasta el ∞ y ver hasta donde se puede llegar'

            },
            {
                name: 'SPAM', value: '⦿ <#739978094747582485> Ahí se Notifica los Directos de Los Streamers del Servidor\n'
                    + '⦿ <#739978051600777248> Ahí se anuncian los vídeos de Los Youtubers del Servidor'
            },
            {
                name: 'VOICE CHANNELS', value: '⦿ <#708147121618157632> Canal de voz general del Servidor\n'
                    + '⦿ <#708746702584283176> Chat de voz usado para grupo de batallas amistosas\n'
                    + '⦿ <#708746595671343195> y <#726955435667488808> Chats de voz usados para subir copas con tu grupo\n'
                    + '⦿ <#708746742895738931> Canal de voz usado para eventos especiales del Servidor o Club\n'
                    + '⦿ <#708814229872050267> Canal de voz al cual eres trasladado si hay inactividad tuya en un canal de voz'
            },
            { name: 'SUPERCELL ANNOUNCEMENTS', value: '⦿ <#708755343194456104> Canal en donde se muestra las novedades de Brawl Stars' }
        )
        .setFooter('Este servidor es parte del club "Dry Ice Jr" de Brawl Stars', client.user.avatarURL())

    channelMessages(client, serverUseChannelNew, useNewEmbed);

}