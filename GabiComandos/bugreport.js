const Discord = require('discord.js');
const config = require('../config.json');

exports.run = async(client, message, args) => {

message.delete().catch(err => console.log('Err bobo!'))


let text = args.slice(0).join(' ');

if(!text){
    let embedmenção = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
    .setTitle(`Preste Atenção!`)
    .setDescription(`⁉️ ${message.author}, **Porfavor Escreva alguma coisa, para eu enviar!**`)
    .addField(`👨‍💻 Exemplo ➔`, `${config.prefix}bugreport Texto`)
    .setColor('PURPLE')
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
    .setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w')

  return  message.channel.send(embedmenção).then(msg => {
      setTimeout(() => msg.delete(), 7000)
  })
}

let channelbug = message.guild.channels.cache.get('914590233163604009')


let embed = new Discord.MessageEmbed() 
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
.setTitle('Bug Reportado!')
.setDescription(`Novo bug reportado, por ${message.author}

💻Bug ➔ ${text}`)
.setTimestamp()
.setColor('PURPLE')
.setThumbnail(message.guild.iconURL({dynamic: true}))
.setTimestamp()
.setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
.setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w')

channelbug.send(embed)

message.channel.send(`${message.author}, Bug enviado com sucesso!`).then(msg =>{
    setTimeout(() => msg.delete().catch(err => console.log('Err bobo!'))
    , 6000)
})

}