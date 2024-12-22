// Commands for discord admins
module.exports = {
    name: 'ban',                    // the name of the command
    aliases: ['kick'],              // other name(s) the command can be summoned
    description: "banea a alguien",
    execute(message, args, cmd, client) {
        // if the channel type is a direct message reply it can only be used in servers
        if (message.channel.type === 'dm') {
            message.reply('Este comando se lo usa en el Servidor: https://discord.gg/EqQQ2xH');
            return;
        };

        // if the command is 'ban' ban the mentioned member
        if (cmd === 'ban') {

            if (!message.member.hasPermission('BAN_MEMBERS')) {
                message.reply('Necesitas el permiso `BAN_MEMBERS` para usar este comando :no_entry_sign:');
                return;
            };

            let mentionMember = message.mentions.members.first();
            if (!mentionMember) {
                message.reply('Debes mencionar al Usuario que quieras Banear <:o_o:833192029253009428>');
                return;
            }


            if (!mentionMember.bannable) {
                message.reply('No puedes Banear a un Moderador :no_entry_sign:');
                return
            };

            mentionMember.ban();
            message.channel.send(`Ouchh eso debió doler! El usuario <@${mentionMember.user.id}> ha sido Baneado del Servidor <:poshito_triste:833192105949659147>`)
                .catch(console.error);

        }

        // if the command is 'kick', kick the mentioned member instead
        if (cmd === 'kick') {

            if (!message.member.hasPermission('KICK_MEMBERS')) {
                message.reply('Necesitas el permiso `KICK_MEMBERS` para usar este comando :no_entry_sign:');
                return;
            };

            let mentionMember = message.mentions.members.first();
            if (!mentionMember) {
                message.reply('Debes mencionar al Usuario que quieras Expulsar <:o_o:833192029253009428>');
                return;
            }

            if (!mentionMember.kickable) {
                message.reply('No puedes expulsar a un Moderador :no_entry_sign:');
                return
            };

            mentionMember.kick();
            message.channel.send(`Ouchh eso debió doler! El usuario <@${mentionMember.user.id}> ha sido Expulsado del Servidor <:poshito_triste:833192105949659147>`)
                .catch(console.error);
        }
    }
}