// Another category of moderator commands, in this case for everything related to mute users
const ms = require('ms');
module.exports = {
    name: 'mute',
    aliases: ['tempmute', 'unmute'],
    description: "pa mutear a alguien",
    execute(message, args, cmd, client) {
        if (message.channel.type === 'dm') {
            message.reply('Este comando se lo usa en el Servidor: https://discord.gg/EqQQ2xH');
            return;
        };

        const target = message.mentions.users.first();
        const member = message.mentions.users.first();

        if (cmd === 'mute') {

            if (member) {
                const memberTarger = message.guild.members.cache.get(member.id);

                if (message.member.permissions.has("MUTE_MEMBERS")) {
                    if (memberTarger.permissions.has('ADMINISTRATOR')) {
                        message.reply("No puedes mutear a un moderador :no_entry_sign:");
                    } else {
                        if (target) {
                            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                            let memberTarget = message.guild.members.cache.get(target.id);

                            if (!args[1]) {
                                memberTarget.roles.add(muteRole.id);
                                message.channel.send(`Se le ha quitado el derecho de Hablar a <@${memberTarget.user.id}> :zipper_mouth:`);
                                return
                            }
                            message.reply('Usa `-tempmute [user] [time]` para mutear temporalmente a alguien');

                            setTimeout(function () {
                            }, ms(args[1]));

                        }
                    }
                } else {
                    message.reply('Necesitas el permiso `MUTE_MEMBERS` para usar este comando :no_entry_sign:');
                }
            } else {
                if (message.member.permissions.has("MUTE_MEMBERS")) {
                    message.reply('Ese usuario no existe en este server :expressionless:');
                } else {
                    message.reply('Necesitas el permiso `MUTE_MEMBERS` para usar este comando :no_entry_sign:');
                }
            }
        }

        if (cmd === 'tempmute') {
            if (member) {
                const memberTarger = message.guild.members.cache.get(member.id);

                if (message.member.permissions.has("MUTE_MEMBERS")) {
                    if (memberTarger.permissions.has('ADMINISTRATOR')) {
                        message.reply("No puedes mutear a un moderador :no_entry_sign:");
                    } else {
                        if (target) {
                            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                            let memberTarget = message.guild.members.cache.get(target.id);

                            if (!args[1]) {
                                message.reply('Debes escribir por cuanto tiempo quieres mutear a este usuario Ej: `-tempmute @Dry Ice Jr Bot 5s/m/h/d`');
                                return
                            }
                            memberTarget.roles.add(muteRole.id);
                            message.channel.send(`Se le ha quitado el derecho de Hablar a <@${memberTarget.user.id}> por ${ms(ms(args[1]))} :zipper_mouth:`);

                            setTimeout(function () {
                                memberTarget.roles.remove(muteRole.id);
                                message.channel.send(`Se le ha dado el derecho de Hablar a <@${memberTarget.user.id}> :grimacing:`);
                            }, ms(args[1]));

                        }
                    }
                } else {
                    message.reply('Necesitas el permiso `MUTE_MEMBERS` para usar este comando :no_entry_sign:');
                }
            } else {
                if (message.member.permissions.has("MUTE_MEMBERS")) {
                    message.reply('Ese usuario no existe en este server :expressionless:');
                } else {
                    message.reply('Necesitas el permiso `MUTE_MEMBERS` para usar este comando :no_entry_sign:');
                }
            }
        }

        if (cmd === 'unmute') {
            if (member) {
                const memberTarger = message.guild.members.cache.get(member.id);

                if (message.member.permissions.has("MUTE_MEMBERS")) {
                    if (memberTarger.permissions.has('ADMINISTRATOR')) {
                        message.reply("No puedes desmutear a un moderador :no_entry_sign:");
                    } else {

                        if (target) {
                            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                            let memberTarget = message.guild.members.cache.get(target.id);

                            memberTarget.roles.remove(muteRole.id);
                            message.channel.send(`Se le ha vuelto a dar el derecho de Hablar a <@${memberTarget.user.id}> :grimacing:`);
                        } else {
                            message.reply('Ese usuario no existe en este server :expressionless:');
                        }
                    }
                } else {
                    message.reply('Necesitas el permiso `MUTE_MEMBERS` para usar este comando :no_entry_sign:');
                }

            } else {
                if (message.member.permissions.has("MUTE_MEMBERS")) {
                    message.reply('Ese usuario no existe en este server :expressionless:');
                } else {
                    message.reply('Necesitas el permiso `MUTE_MEMBERS` para usar este comando :no_entry_sign:');
                }
            }
        }
    }
}