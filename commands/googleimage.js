// var Scraper = require('images-scraper');

// const google = new Scraper({
//     puppeteer: {
//         headless: true
//     }
// })

// allows the bot to display the first image from google search based on the input of the user
module.exports = {
    name: 'googleimage',
    description: 'envia una imagen',
    async execute(message, args, cmd, client) {
        if (message.channel.id === '729112106930143272' || message.channel.id === '830636260367794176' || message.channel.id === '717908264809005138') {
            message.reply('Se ha desactivado este comando debido a un error, lo siento por ahora no se puede usar :pensive:');
            // const image_query = args.join(' ');
            // if(!image_query) return message.reply('Debes escribir el nombre de la imagen Ej: `-googleimage Brawl Stars`');

            // const image_results = await google.scrape(image_query, 1);
            // message.channel.send(image_results[0].url);
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