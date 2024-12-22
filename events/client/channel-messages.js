// This module allows the bot to send and edit the messages it send, so it can be used for a rules channel for example
module.exports = async (client, id, text, reactions = []) => {
    const channel = await client.channels.fetch(id)

    channel.messages.fetch().then((messages) => {
        if (messages.size === 0) {
            channel.send(text)
        } else {
            for (const message of messages) {
                message[1].edit(text)
            }
        }
    })
}