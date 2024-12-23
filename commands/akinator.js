// Play Akinator with the bot using the aki api
module.exports = {
    name: 'akinator',
    aliases: ['aki'],
    description: "Juega a Akinator",
    async execute(message, args, cmd, client, Discord) {
        const { Aki, regions } = require("aki-api");
        const { list, verify } = require("../functions");
        // const regions = ["normal", "animales"];

        if (message.channel.type === 'dm') {
            message.reply('Este comando se lo usa en el Servidor: https://discord.gg/EqQQ2xH');
            return;
        };

        if (message.channel.id === '729112106930143272' || message.channel.id === '830636260367794176' || message.channel.id === '717908264809005138') {

            if (!message.channel.permissionsFor(client.user).has("EMBED_LINKS")) return message.channel.send("No tengo el permiso de `EMBED_LINKS`");
            // if (!args[0]) return message.reply('Debes escribir que categoria quieres jugar Ej: `-aki normal` o `-aki animales`').then((sent) => {
            //     setTimeout(function () {
            //         sent.delete();
            //         message.delete();
            //     }, 7000);
            // });
            // console.log(regions);

            // let stringAki = args[0].toLowerCase();
            let region = 'es';
            // if (stringAki === "normal".toLocaleLowerCase()) region = "es";
            // if (stringAki === "animales".toLocaleLowerCase()) region = "es_animals";
            // if (!regions.includes(stringAki)) return message.reply("Esa no es una categoría válida :neutral_face:").then((sent) => {
            //     setTimeout(function () {
            //         sent.delete();
            //         message.delete();
            //     }, 7000);
            // });
            message.channel.send("Espera <a:gato_truco:833834155522392154>...").then((sent) => {
                setTimeout(function () {
                    sent.delete();
                }, 4000);
            });

            try {
                const aki = new Aki({ region });
                let ans = null;
                let win = false;
                let timeGuesses = 0;
                let guessResetNum = 0;
                let wentBack = false;
                let forceGuess = false;
                const guessBlackList = [];
                while (timeGuesses < 3) {
                    if (guessResetNum > 0) guessResetNum--;
                    if (ans === null) {
                        await aki.start();
                    } else if (wentBack) {
                        wentBack = false;
                    } else {
                        try {
                            await aki.step(ans)
                        } catch (err) {
                            console.log(err);
                            await aki.step(ans);
                        }
                    }
                    if (!aki.answers || aki.currentStep >= 79) forceGuess = true;
                    const answers = aki.answers.map((answer) => answer.toLowerCase());
                    answers.push("end");
                    if (aki.currentStep > 0) answers.push("back");
                    if (aki.guess == undefined) {
                        const embed = new Discord.MessageEmbed()
                            .setAuthor(`Pregunta #${aki.currentStep + 1}`, client.user.avatarURL())
                            .setDescription([
                                `<@${message.author.id}> **${aki.question}**`,
                                `Respuestas:`,
                                `**${aki.answers.join(" | ")}${aki.currentStep > 0 ? ` | Back` : ""} | End **`
                            ])
                            .setColor('#0ebcfb')
                        await message.channel.send(embed).then((sent) => {
                            setTimeout(function () {
                                sent.delete();
                            }, 30000);
                        });
                        const filter = (res) => res.author.id === message.author.id && answers.includes(res.content.toLowerCase())
                        const messages = await message.channel.awaitMessages(filter, {
                            max: 1,
                            time: 30000
                        });
                        if (!messages.size) {
                            const timeOutEmbed = new Discord.MessageEmbed()
                                .setDescription(`<:efe:833192065323892736> Se ha acabado el tiempo de espera <@${message.author.id}>`)
                                .setColor('#0ebcfb')
                            await message.channel.send(timeOutEmbed);
                            win = true;
                            break;
                        }
                        const choice = messages.first().content.toLowerCase();
                        if (choice.toLowerCase() === "end".toLocaleLowerCase()) {
                            forceGuess = true;
                        } else if (choice.toLowerCase() === "back".toLocaleLowerCase()) {
                            wentBack = true;
                            await aki.back();
                            continue;
                        } else {
                            ans = answers.indexOf(choice);
                        }
                    }
                    // if ((aki.progress >= 90 && !guessResetNum) || forceGuess) {
                    if (forceGuess) {
                        await message.reply("No puedo pensar en nadie <:o_o:833192029253009428>");
                        win = true;
                        break;
                    }
                    if (aki.guess != undefined && !guessResetNum) {
                        timeGuesses++;
                        guessResetNum += 10;
                        // await aki.win();
                        // const guess = aki.answers.filter((g) => !guessBlackList.includes(g.id))[0];
                        // if (!guess.name) {
                        //     await message.reply("No puedo pensar en nadie <:o_o:833192029253009428>");
                        //     win = true;
                        //     break;
                        // }
                        guessBlackList.push(aki.guess.id_proposition);
                        const embed = new Discord.MessageEmbed()
                            .setColor('#0ebcfb')
                            // .setTitle(`Estoy ${Math.round(aki.guess.proba * 100)}% Seguro que es:`)
                            .setTitle(`Estoy Seguro que es:`)
                            .setDescription(`${aki.guess.name_proposition}${aki.guess.description_proposition ? ` - ${aki.guess.description_proposition}` : ""}
                    <@${message.author.id}> Escribe sí/no para confirmar o no`)
                            .setImage(aki.guess.photo || null)
                        await message.channel.send(embed);
                        const verification = await verify(message.channel, message.author);
                        if (verification === 0) {
                            win = "time";
                            break;
                        } else if (verification) {
                            win = false;
                            break;
                        } else {
                            const exmessage = "Me rindo <:angry_m_m:833192077994623007>";
                            // const exmessage = timeGuesses >= 3 || forceGuess ? "Me rindo <:angry_m_m:833192077994623007>" : `<@${message.author.id}> voy a continuar adivinando`;
                            const embed = new Discord.MessageEmbed()
                                .setDescription([`Si es así... ${exmessage}`])
                                .setColor('#0ebcfb')
                            await message.channel.send(embed);
                            win = true;
                            break;
                            // if (timeGuesses >= 3 || forceGuess) {
                            //     win = true;
                            //     break;
                            // }
                        }
                    }
                }
                const noAnsEmbed = new Discord.MessageEmbed()
                    .setDescription(`<@${message.author.id}>, Viendo que no has respondido... Gané <a:perro_emocionado:833827868941090836>`)
                    .setColor('#0ebcfb')
                if (win === "time") return message.channel.send(noAnsEmbed);
                if (win) {
                    const embed = new Discord.MessageEmbed()
                        .setDescription(`<@${message.author.id}>, Me has derrotado esta vez <:poshito_triste:833192105949659147>`)
                        .setColor('#0ebcfb')
                    return message.channel.send(embed);
                } else {
                    const winEmbed = new Discord.MessageEmbed()
                        .setDescription(`Siuuuuu <@${message.author.id}>, lo adiviné otra vez!! <a:cucaracha_sith:833834152566587392>`)
                        .setColor('#0ebcfb')
                    return message.channel.send(winEmbed);
                }
            } catch (err) {
                console.error(err);
                return message.reply(`A ocurrido un error: \`${err.message}\` Intentalo de nuevo`).then((sent) => {
                    setTimeout(function () {
                        sent.delete();
                    }, 30000);
                });
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