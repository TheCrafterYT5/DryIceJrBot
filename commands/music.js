// Allows the bot to search for songs and play them in a voice channel

const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

const queue = new Map();

module.exports = {
    name: 'play',
    aliases: ['skip', 'stop'],
    description: 'usar herramientas de música',
    async execute(message, args, cmd, client, Discord) {
        if (message.channel.type === 'dm') {
            message.reply('Este comando se lo usa en el Servidor: https://discord.gg/EqQQ2xH');
            return;
        };

        if (message.channel.id === '729112106930143272' || message.channel.id === '830636260367794176' || message.channel.id === '717908264809005138') {

            // message.reply('Se ha desactivado este comando debido a una falta de compatibilidad <:poshito_triste:833192105949659147>\nSe esta trabajando en resolverlo :pensive:');

            const voice_channel = message.member.voice.channel;
            if (!voice_channel) return message.reply('Debes estar en un canal de voz para usar este comando :person_facepalming:');
            const permissions = voice_channel.permissionsFor(message.client.user);
            if (!permissions.has('CONNECT')) return message.reply('Necesitas el permiso `CONNECT` para usar este comando :no_entry_sign:');
            if (!permissions.has('SPEAK')) return message.reply('Necesitas el permiso `SPEAK` para usar este comando :no_entry_sign:');

            const server_queue = queue.get(message.guild.id);

            if (cmd === 'play') {
                if (!args.length) return message.reply('Debes poner lo que quieras reproducir :person_facepalming:');
                let song = {};

                if (ytdl.validateURL(args[0])) {
                    const song_info = await ytdl.getInfo(args[0]);
                    song = { title: song_info.videoDetails.title, url: song_info.videoDetails.video_url }
                } else {
                    const video_finder = async (query) => {
                        const videoResult = await ytSearch(query);
                        return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
                    }

                    const video = await video_finder(args.join(' '));
                    if (video) {
                        song = { title: video.title, url: video.url }
                    } else {
                        message.reply('No hay resultados de tu búsqueda :confused:')
                    }
                }

                if (!server_queue) {

                    const queue_constructor = {
                        voice_channel: voice_channel,
                        text_channel: message.channel,
                        connection: null,
                        songs: []
                    }

                    queue.set(message.guild.id, queue_constructor);
                    queue_constructor.songs.push(song);

                    try {
                        const connection = await voice_channel.join();
                        queue_constructor.connection = connection;
                        video_player(message.guild, queue_constructor.songs[0]);
                    } catch (err) {
                        queue.delete(message.guild.id);
                        message.channel.send('A, tuve un error al conectarme :no_mouth:');
                        throw err;
                    }
                } else {
                    server_queue.songs.push(song);
                    return message.channel.send(`:eject: he añadido ***${song.title}*** a la lista de reproducción :headphones:`);
                }
            }

            else if (cmd === 'skip') skip_song(message, server_queue);
            else if (cmd === 'stop') stop_song(message, server_queue);
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

const video_player = async (guild, song) => {
    const song_queue = queue.get(guild.id);

    if (!song) {
        song_queue.voice_channel.leave();
        queue.delete(guild.id);
        return;
    }
    const stream = ytdl(song.url, { filter: 'audioonly' });
    song_queue.connection.play(stream, { seek: 0, volume: 0.5 })
        .on('finish', () => {
            song_queue.songs.shift();
            video_player(guild, song_queue.songs[0]);
        });
    await song_queue.text_channel.send(`:arrow_forward: Estoy reproduciendo ***${song.title}*** :notes:`)
}

const skip_song = (message, server_queue) => {
    if (!message.member.voice.channel) return message.reply('Debes estar en un canal de voz para usar este comando :person_facepalming:');
    if (!server_queue) {
        return message.reply(`No hay ninguna canción en la lista de reproduccion :thinking:`);
    }
    server_queue.connection.dispatcher.end();
}

const stop_song = (message, server_queue) => {
    if (!message.member.voice.channel) return message.reply('Debes estar en un canal de voz para usar este comando :person_facepalming:');
    message.channel.send('Estoy abandonando el canal de voz :woozy_face:');
    server_queue.songs = [];
    server_queue.connection.dispatcher.end();
}