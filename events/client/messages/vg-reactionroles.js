// Allows the bot to create a videogame role reaction message, so an user can choose their videogame roles
const firstMessage = require('../roles-message')
const { Client, Attachment, Message, MessageEmbed } = require("discord.js");

module.exports = client => {
    const channelId = '838210438637944882'

    const embed = new MessageEmbed()
        .setColor('#0ebcfb')
        .setTitle('Escoge que videojuegos juegas reacionando con el respectivo Emoji')

    const getEmoji = emojiName => client.emojis.cache.find(emoji => emoji.name === emojiName)

    const emojis = {
        fortnite_take_the_l: 'Fortnite',
        cod_si: 'COD Mobile',
        valorant_turret: 'Valorant',
        minecraft_shift_spam: 'Minecraft',
        clashroyale_mega_skeleton: 'Clash Royale',
        roblox_fortnite_dance: 'Roblox',
        amongus_dance: 'Among Us',
        gd: 'Geometry Dash',
        paimon_hehe: 'Genshin Impact',
    }

    const reactions = []

    let emojiText = 'Se te añadirá el rol de los videojuegos que escogas...\nSi tienes alguna recomendacion o quieres sugerir un Videojuego más, puedes comunicarte con uno de los <@&708772695604723813> o decirlo en <#838546539239702570>\n\n'
    for (const key in emojis) {
        const emoji = getEmoji(key)
        reactions.push(emoji)

        const role = emojis[key]
        emojiText += `${emoji} = ${role}\n`
    }

    firstMessage(client, channelId, embed.setDescription(emojiText), reactions, embed)

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