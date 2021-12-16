const Discord = require('discord.js');
const config = require('../config.json')

exports.run = async(client, message, args) => {

message.delete().catch(err => console.log('Err bobo!'))

    const embedmentions2 = new Discord.MessageEmbed()
    .setAuthor(message.author.username,message.author.displayAvatarURL({dynamic: true}))
    .setTitle('Olá amigo(a)!')
    .setDescription(`🙋‍♀️ Olá ${message.author}, Eu sou Bot Oficial da Gabii. Nesse momento Estou em desenvolvimento
    em breve terei varios comandos!`)
    .addField(`😀 Escolha seu cargo no ➔`, message.guild.channels.cache.get('911373927727648829')) 
    .addField(`👮 Siga as regras no ➔`, message.guild.channels.cache.get('911432651397816390'))
    .addField(`😀 Meu prefix ➔`, ` **${config.prefix}** `)
    .setThumbnail(message.guild.iconURL({dynamic: true}))
    .setTimestamp()
    .setURL(`https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w`, `https://www.twitch.tv/gabiwewe`)
    .setColor('PURPLE')
    .setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic: true}))
    

return message.channel.send(embedmentions2).then(gb =>{
    gb.react('💗')
    setTimeout(() => gb.delete().catch(err => console.log('Err bobo!'))
    , 25000)

})
}
