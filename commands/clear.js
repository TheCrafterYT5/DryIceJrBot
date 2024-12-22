// Allows you to clear x quantity of messages in a Discord Server Chat 
module.exports = {
    name: 'clear',
    aliases: ['c'],
    description: "limpiar mensajes",
    async execute(message, args, cmd, client) {
        if (message.channel.type === 'dm') {
            message.reply('Este comando se lo usa en el Servidor: https://discord.gg/EqQQ2xH');
            return;
        };

        if (message.member.permissions.has("MANAGE_MESSAGES")) {

            if (!args[0]) return message.reply("Eso no es válido :neutral_face:").then((sent) => {
                setTimeout(function () {
                    sent.delete();
                    message.delete();
                }, 4000);
            });
            if (isNaN(args[0])) return message.reply("Debes poner un número :expressionless:").then((sent) => {
                setTimeout(function () {
                    sent.delete();
                    message.delete();
                }, 4000);
            });

            if (args[0] > 99) return message.reply("No puedo borrar 100 o más mensajes :frowning:").then((sent) => {
                setTimeout(function () {
                    sent.delete();
                    message.delete();
                }, 4000);
            });
            if (args[0] < 1) return message.reply("No puedes borrar 0 mensajes :person_facepalming:").then((sent) => {
                setTimeout(function () {
                    sent.delete();
                    message.delete();
                }, 4000);
            });

            await message.channel.messages.fetch({ limit: parseInt(args[0]) + 1 }).then(messages => {
                message.channel.bulkDelete(messages);
            })

            message.channel.send(`Se han eliminado ${(args[0])} mensaje/s :white_check_mark:`).then((sent) => {
                setTimeout(function () {
                    sent.delete();
                }, 4000);
            });

        } else {
            message.reply('Necesitas el permiso `MANAGE_MESSAGES` para usar este comando :no_entry_sign:');
        }
    }
}