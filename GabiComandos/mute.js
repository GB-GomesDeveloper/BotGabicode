const Discord = require('discord.js');
const config = require('../config.json')
exports.run = async(client, message, args) =>{

message.delete().catch(err => console.log('Err bobo!'))


if(!message.member.permissions.has('MANAGE_CHANNELS')){

    const avisostaffs = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
    .setTitle('Atênção Staffs')
    .setDescription(`👮 Staffs, o Membro ${message.author} Usou um codigo (${config.prefix}mute) que ele não tem permição!`)
    .addField(`Não sabe os comandos de Admistração? ➔`, `Digite **${config.Prefix}ajuda** `)
    .setColor('PURPLE')
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
    .setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w')

message.client.channels.cache.get('911067021712695309').send(avisostaffs).then(gb =>{
    gb.react('😡')})

const Embedpermission = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
.setTitle(`Permição Não Concedida`)
.setDescription(`❌ ${message.author} Você não tem permição para esse comando! **(Isso será avisado aos staffs)**`)
.addField('👮 Segue as regras em ➔', `${message.guild.channels.cache.get("911432651397816390")}`)
.setColor('PURPLE')
.setTimestamp()
.setThumbnail(message.guild.iconURL({dynamic: true}))
.setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
.setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w')

 return message.channel.send(Embedpermission)

} else{

const members = message.mentions.members.first() || message.guild.members.cache.get(args[0])


if(!members){
    let embedmenção = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
    .setTitle(`Preste Atenção!`)
    .setDescription(`⁉️ ${message.author}, **Porfavor menciona um membro válido!**`)
    .addField(`👨‍💻 Exemplo ➔`, `${config.prefix}mute @indivíduo`)
    .setColor('PURPLE')
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
    .setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w')

  return  message.channel.send(embedmenção).then(gabi =>{
     setTimeout(() => gabi.delete().catch(err => console.log('Err bobo!'))
     , 9000)
  })
}

if(!members.bannable){
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
    .setTitle(`Desculpa!`)
    .setDescription(`👮 ${message.author}, **Desculpa, não posso mutar esse membro. Porque ele(a) tem o cargo maior que o meu!**`)
    .setColor('PURPLE')
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
    .setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w')

   return message.channel.send(embed).then(mbrs =>{
      setTimeout(() => mbrs.delete().catch(err => console.log('Err bobo!'))
      , 9000)
   })
} else {

const cargo = message.guild.roles.cache.get('913840674057642024');

members.roles.add(cargo);

let embedaviso = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
.setTitle('Membro Mutado!')
.setDescription(`${message.author}, **O membro ${members} foi mutado.**`)
.addField(`👮‍♂️ Para desmutar  ➔`, `Digite: ${config.prefix}unmute`)
.setTimestamp()
.setThumbnail(members.user.displayAvatarURL({dynamic: true}))
.setColor('PURPLE')
.setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
.setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w')

return  message.channel.send(embedaviso).catch(err => message.channel.send(`Algum erro aconteceu` + `Erro: ${err}`))

}


}


}