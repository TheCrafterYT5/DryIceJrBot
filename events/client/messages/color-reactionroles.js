// Allows the bot to create a color role reaction message, so an user can choose their color roles
const firstMessage = require('../roles-message')
const { Client, Attachment, Message, MessageEmbed } = require("discord.js");

module.exports = client => {
    const channelId = '864907126756081684'

    const embed = new MessageEmbed()
        .setColor('#0ebcfb')
        .setTitle('Escoge que Color quieres que sea tu Nombre en este Servidor')

    const getEmoji = emojiName => client.emojis.cache.find(emoji => emoji.name === emojiName)

    const emojis = {
        violet_color: 'Violet | Color',
        blue_color: 'Blue | Color',
        yellow_color: 'Yellow | Color',
        orange_color: 'Orange | Color',
        white_color: 'White | Color',
        green_color: 'Green | Color',
        ponce_color: 'Ponce | Color',
        red_color: 'Red | Color',
        pink_color: 'Pink | Color',
    }

    const reactions = []

    for (const key in emojis) {
        const emoji = getEmoji(key)
        reactions.push(emoji)
    }

    let embedText = 'Se te añadirá el rol del color que escojas...\n'
        + 'Si tienes alguna recomendacion o quieres sugerir un Color más, puedes comunicarte con uno de los <@&708772695604723813> '
        + 'o decirlo en <#838546539239702570>\n\n'
        + '<a:violet_color:864903770134282300> = <@&840412120101421066>\n'
        + '<a:blue_color:864895563585945620> = <@&840411037597564960>\n'
        + '<a:yellow_color:864902668064915457> = <@&840411262227316746>\n'
        + '<a:orange_color:864902667092754483> = <@&840410437119508500>\n'
        + '<a:white_color:864902667271405578> = <@&840411858308956172>\n'
        + '<a:green_color:864902666966663229> = <@&840412070759104513>\n'
        + '<a:ponce_color:864902667013062676> = <@&840412243114852362>\n'
        + '<a:red_color:864902667250827274> = <@&840412488137965568>\n'
        + '<a:pink_color:864902667235229706> = <@&840411717632000040>\n'

    firstMessage(client, channelId, embed.setDescription(embedText), reactions, embed)

    const handleReaction = (reaction, user, add) => {
        if (user.id === '816382848037683251') {
            return
        }

        const emoji = reaction._emoji.name

        const { guild } = reaction.message

        const roleName = emojis[emoji]
        if (!roleName) {
            return
        }

        const role = guild.roles.cache.find(role => role.name === roleName)
        const member = guild.members.cache.find(member => member.id === user.id)

        if (add) {
            member.roles.add(role)
        } else {
            member.roles.remove(role)
        }
    }

    client.on('messageReactionAdd', (reaction, user) => {
        if (reaction.message.channel.id === channelId) {
            handleReaction(reaction, user, true)
        }
    })

    client.on('messageReactionRemove', (reaction, user) => {
        if (reaction.message.channel.id === channelId) {
            handleReaction(reaction, user, false)
        }
    })
}