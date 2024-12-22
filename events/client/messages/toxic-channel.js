// Message related to a channel without moderators
const firstMessage = require('../roles-message')
const { Client, Attachment, Message, MessageEmbed } = require("discord.js");

module.exports = client => {
    const channelId = '866735422859378698'

    const embed = new MessageEmbed()
        .setColor('#0ebcfb')
        .setTitle('Reacciona aquí para tener acceso a Dark-Chat')

    const getEmoji = emojiName => client.emojis.cache.find(emoji => emoji.name === emojiName)

    const emojis = {
        toxic: 'Toxic',
    }

    const reactions = []

    for (const key in emojis) {
        const emoji = getEmoji(key)
        reactions.push(emoji)
    }

    let embedText = 'Al **reaccionar** aquí, desbloquearás el acceso a <#866734595009019974>, '
        + 'Un Canal fuera de **Moderadores y Moderación**\n'
        + '⚠️**Ten cuidado, ese canal esta fuera del alcance de Moderadores y eso Significa que puede haber contenido sensible**\n\n'
        + 'Si tienes alguna recomendación, puedes comunicarte con uno de los <@&708772695604723813> '
        + 'o decirlo en <#838546539239702570>\n\n'

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