const Discord = require('discord.js');
const config = require('../config.json')

exports.run = async(client, message, args) =>{

message.delete().catch(err => console.log('Err bobo!'))


   if(!message.member.permissions.has('ADMINISTRATOR')){

    const avisostaffs = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
    .setTitle('Atênção Staffs')
    .setDescription(`👮 Staffs, o Membro ${message.author}, Usou um codigo (g!ban) que ele não tem permição!`)
    .addField(`Não sabe os comandos de Admistração? ➔`, `Digite **${config.prefix}ajuda** `)
    .setColor('PURPLE')
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
    .setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w')

    message.client.channels.cache.get('911067021712695309').send(avisostaffs).then(gb =>{
    gb.react('😡')})


    let embedPermission = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
.setTitle(`Permição Não Concedida`)
.setDescription(`❌ ${message.author}, Você não tem permição para esse comando! **(Isso será avisado aos staffs)**`)
.addField('👮 Segue as regras em ➔', `${message.guild.channels.cache.get('911432651397816390')}`)
.setColor('PURPLE')
.setTimestamp()
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
.setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w') 


  return  message.channel.send(embedPermission)

} else {
    let lista = message.guild.fetchBans()

    let listban = (await lista)
    .map((member => member.user.tag)).join(`\n > ➔ `)

    message.guild.fetchBans().then(gabriel =>{
        let list = gabriel.map(user => user.tag).join('\n')
    }) 

if(listban.length >= 1950) listban = `${ban.slice(0, 1948)}...`

const listaembed = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
.setTitle(`Lista de Banidos!`)
.setDescription(`${message.author}, Aqui você verá todos os membros banidos.

> ➔ ${listban}`)
.setColor('PURPLE')
.setTimestamp()
.setThumbnail(message.guild.iconURL({dynamic: true}))
.setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
.setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w')

if(!message.channel.name.includes('💻│comandos-staffs')) {
    message.reply(`❌ Você não pode usar esse comando, por questão de privacidade. Você pode usar no ${message.guild.channels.cache.get(`913790872338984960`)}`)
} else {
  return message.channel.send(listaembed).then(emoji => {
        emoji.react('👮‍♂️')
    })
}
}


}