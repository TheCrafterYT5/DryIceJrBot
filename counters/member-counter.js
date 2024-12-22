// Module to display every x seconds the number of users in the server
module.exports = async (client) => {
    const guild = client.guilds.cache.get('708147121169105004');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('837833273257754625');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Actualizando el contador de miembros...');
    }, 600000);
}