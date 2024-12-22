// Once the bot is ready and online, it will do all of these
module.exports = (Discord, client, message) => {
    const memberCounter = require('../../counters/member-counter');
    const vgReactionRoles = require('./messages/vg-reactionroles');
    const clReactionRoles = require('./messages/color-reactionroles');
    const toxicRole = require('../client/messages/toxic-channel');
    const rules = require('./messages/rules');
    const division = require('./messages/division');
    const { registerFont, createCanvas } = require('canvas')
    const Canvas = require('canvas')
    registerFont('LilitaOne-Regular.ttf', { family: 'Lilita One' })
    console.log('Dry Ice Bot ha sido activado')

    // Execute the following functions
    memberCounter(client);
    vgReactionRoles(client);
    clReactionRoles(client);
    rules(client);
    toxicRole(client);
    division(client);

    // This will set the custom activity of the bot
    client.user.setActivity("Bot Desarrollado por: TheCrafterYT5", {
        type: "STREAMING",
        url: "https://www.twitch.tv/thecrafteryt5"
    });
    var welcomeCanvas = {};
    welcomeCanvas.create = Canvas.createCanvas(1024, 500)
    welcomeCanvas.context = welcomeCanvas.create.getContext('2d')
    welcomeCanvas.context.font = '72px Lilita One';
    welcomeCanvas.context.fillStyle = '#ffffff';

    // The following module is to create an user card for later use
    Canvas.loadImage('https://i.imgur.com/lVJwU24.png').then(async (img) => {
        welcomeCanvas.context.drawImage(img, 0, 0, 1024, 500)
        welcomeCanvas.context.fillText("Bienvenido", 360, 360);
        welcomeCanvas.context.beginPath();
        welcomeCanvas.context.arc(512, 166, 128, 0, Math.PI * 2, true);
        welcomeCanvas.context.stroke()
        welcomeCanvas.context.fill()
    })

    // This will send the user card every time a user joins the server
    client.on('guildMemberAdd', async guildMember => {
        const welcomeChannel = client.channels.cache.get('917545286497357854')
        let canvas = welcomeCanvas;
        canvas.context.font = '42px Lilita One',
            canvas.context.textAlign = 'center';
        canvas.context.fillText(guildMember.user.tag.toUpperCase(), 512, 410)
        canvas.context.font = '32px Lilita One'
        canvas.context.fillText(`Miembro #${guildMember.guild.memberCount}`, 512, 455)
        canvas.context.beginPath()
        canvas.context.arc(512, 166, 119, 0, Math.PI * 2, true)
        canvas.context.closePath()
        canvas.context.clip()
        await Canvas.loadImage(guildMember.user.displayAvatarURL({ format: 'png', size: 1024 }))
            .then(img => {
                canvas.context.drawImage(img, 393, 47, 238, 238);
            })

        const welcomeMessage = [`Bienvenido/a <@${guildMember.user.id}> al Servidor del Club **${guildMember.guild.name}**!\nRecuerda leer las reglas y usar el Servidor como se debe`,
        `Gracias por unirte al Server <@${guildMember.user.id}>!\nRecuerda leer <#729135164332048424> y <#708765775736864798>`,
        `Bienvenido/a <@${guildMember.user.id}> a este Lugar!\nLee <#729135164332048424> y <#708765775736864798> para evitar malentendidos`,
        `Eres del Club <@${guildMember.user.id}>? Igual, Bienvenido!\nNo olvides leer las reglas y como usar este Servidor`,
        `<@${guildMember.user.id}> te doy la Bienvenida al Server del Club **${guildMember.guild.name}**!\nEvita ser Warneado o Amenazado leyendo <#729135164332048424> y <#708765775736864798>`,
        `Ya te he visto antes <@${guildMember.user.id}> <:hmmm:833569969392189481>...\nEra Broma <:xd_mc_zorro:840010697651388437>, Recuerda leer las Reglas y Uso de este Servidor`]

        const randomWelcome = welcomeMessage[Math.floor(Math.random() * welcomeMessage.length)];

        let atta = new Discord.MessageAttachment(canvas.create.toBuffer(), `Bienvenido-${guildMember.id}.png`)
        try {
            welcomeChannel.send(randomWelcome, atta)
        } catch (error) {
            console.log(error)
        }
    })

    client.once('reconnecting', () => {
        console.log('Reconnecting!');
    });

    client.once('disconnect', () => {
        console.log('Disconnect!');
    });

}