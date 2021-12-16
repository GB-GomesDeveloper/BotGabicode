// import { MessageEmbed } from "discord.js";

 const Discord = require('discord.js');

 const config = require('../config.json')

exports.run = async(client, messagens, args) =>{

    messagens.delete().catch(err => console.log('Err bobo!'))


if(!messagens.member.permissions.has('BAN_MEMBERS')){

    const avisostaffs = new Discord.MessageEmbed()
    .setAuthor(messagens.author.username, messagens.author.displayAvatarURL({dynamic: true}))
    .setTitle('Atênção Staffs')
    .setDescription(`👮 Staffs, o Membro ${messagens.author}, Usou um codigo (${config.prefix}ban) que ele não tem permição!`)
    .addField(`Não sabe os comandos de Admistração? ➔`, `Digite **${config.prefix}ajuda** `)
    .setColor('PURPLE')
    .setTimestamp()
    .setThumbnail(messagens.author.displayAvatarURL({dynamic: true}))
    .setFooter(`${messagens.guild.name} - Alguns direitos reservados ®`, messagens.guild.iconURL({dynamic:true}))
    .setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w')

    messagens.client.channels.cache.get('911067021712695309').send(avisostaffs).then(gb =>{
    gb.react('😡')})


    let embedPermission = new Discord.MessageEmbed()
.setAuthor(messagens.author.username, messagens.author.displayAvatarURL({dynamic: true}))
.setTitle(`Permição Não Concedida`)
.setDescription(`❌ ${messagens.author}, Você não tem permição para esse comando! **(Isso será avisado aos staffs)**`)
.addField('👮 Segue as regras em ➔', `${messagens.guild.channels.cache.get('911432651397816390')}`)
.setColor('PURPLE')
.setTimestamp()
.setThumbnail(messagens.author.displayAvatarURL({dynamic: true}))
.setFooter(`${messagens.guild.name} - Alguns direitos reservados ®`, messagens.guild.iconURL({dynamic:true}))
.setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w') 


  return  messagens.channel.send(embedPermission)

}


const menção = messagens.mentions.members.first() || messagens.guild.members.cache.get(args[0])

const motivo = args.slice(1).join(" ")

if(!menção){
    let embedmenção = new Discord.MessageEmbed()
    .setAuthor(messagens.author.username, messagens.author.displayAvatarURL({dynamic: true}))
    .setTitle(`Preste Atenção!`)
    .setDescription(`⁉️ ${messagens.author}, Porfavor menciona um membro válido!`)
    .addField(`👮‍♂️ Exemplo ->`, `${config.prefix}ban @indivíduo motivo`)
    .setColor('PURPLE')
    .setTimestamp()
    .setThumbnail(messagens.author.displayAvatarURL({dynamic: true}))
    .setFooter(`${messagens.guild.name} - Alguns direitos reservados ®`, messagens.guild.iconURL({dynamic:true}))
    .setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w')

  return  messagens.channel.send(embedmenção).then(gb =>{
    setTimeout(() => gb.delete().catch(err => console.log('Err bobo!'))
    , 7000)
  }) 
} 

if(!menção.bannable){
   let embed = new Discord.MessageEmbed()
    .setAuthor(messagens.author.username, messagens.author.displayAvatarURL({dynamic: true}))
    .setTitle(`Desculpa!`)
    .setDescription(`😔 ${messagens.author}, **Desculpa, não posso banir esse membro. Porque ele(a) tem o cargo maior que o meu!**`)
    .setColor('PURPLE')
    .setTimestamp()
    .setThumbnail(messagens.author.displayAvatarURL({dynamic: true}))
    .setFooter(`${messagens.guild.name} - Alguns direitos reservados ®`, messagens.guild.iconURL({dynamic:true}))
    .setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w')

   return messagens.channel.send(embed).then(per =>{
        per.react('🕵️‍♂️')
    })
} 

if(!motivo){
    let embedmotivo = new Discord.MessageEmbed()
    .setAuthor(messagens.author.username, messagens.author.displayAvatarURL({dynamic: true}))
    .setTitle(`Preste Atenção!`)
    .setDescription(`⁉️ ${messagens.author}, Você Esqueceu de falar o motivo do banimento do indivíduo!`)
    .addField(`👮‍♂️ Exemplo ➔`, `${config.prefix}ban @indivíduo motivo`)
    .setColor('PURPLE')
    .setTimestamp()
    .setThumbnail(messagens.author.displayAvatarURL({dynamic: true}))
    .setFooter(`${messagens.guild.name} - Alguns direitos reservados ®`, messagens.guild.iconURL({dynamic:true}))
    .setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w')

    return messagens.channel.send(embedmotivo).then(gb =>{
        setTimeout(() => gb.delete().catch(err => console.log('Err bobo!'))
        , 7000)
    })
}

let  certeza = new Discord.MessageEmbed()
.setAuthor(messagens.author.username, messagens.author.displayAvatarURL({dynamic: true}))
.setTitle(`Tem Certeza?`)
.setDescription(`🤔 ${messagens.author}, Tem certeza que ter banir o membro ${menção} ?`)
.addField(`⁉️ Para Sim`, `Reaja ✔️`)
.addField(`⁉️ Para Não`, `Reaja ❌`)
.setColor('PURPLE')
.setTimestamp()
.setThumbnail(messagens.author.displayAvatarURL({dynamic: true}))
.setFooter(`${messagens.guild.name} - Alguns direitos reservados ®`, messagens.guild.iconURL({dynamic:true}))
.setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w')

messagens.channel.send(certeza).then(gbgb =>{
    gbgb.react('✔️')
      gbgb.react('❌')
    setTimeout(() => gbgb.delete().catch(err => console.log('Err bobo!'))
    , 50000)

let gabriel1 = (r, u) => r.emoji.name === "✔️" && u.id === messagens.author.id
let gabriel2 = (r, u) => r.emoji.name === "❌" && u.id === messagens.author.id

let msg01 = gbgb.createReactionCollector(gabriel1);
let msg02 = gbgb.createReactionCollector(gabriel2);

msg01.on('collect', gabrielgomes =>{
   let banido = new Discord.MessageEmbed()
   .setAuthor(messagens.author.username, messagens.author.displayAvatarURL({dynamic: true}))
   .setTitle(`Membro Banido!`)
   .setDescription(`✔️ O membro ${menção}, foi banido permanente!
   
   👮 Banido por ➔ ${messagens.author}
   
   ⁉️ Motivo de banimento ➔ **${motivo}**
   
   `)
   .setColor('PURPLE')
   .setThumbnail(menção.user.displayAvatarURL({dynamic: true}))
   .setFooter(`${messagens.guild.name} - Alguns direitos reservados ®`, messagens.guild.iconURL({dynamic:true}))
   .setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w')

   messagens.channel.send(banido).then(msg =>{
       msg.react('😁')
       setTimeout(() => msg.delete().catch(err => console.log('Err bobo!'))
       , 7000);
   })
   gbgb.delete()
   menção.ban({ days: 7, reason: motivo })
   .catch(err => messagens.reply(`❌ Eu não consigo banir o membro ${menção}, por causa do erro ${err}`)) 
})

msg02.on('collect', gabrielgomes2 =>{
    messagens.channel.send(`**Ok ${messagens.author}, o panel foi encerrado.**`).then(a =>{
        setTimeout(() => a.delete().catch(err => console.log('Err bobo!'))
        , 7000);
    })
    gbgb.delete().catch(err => console.log('Err bobo!'))

})

})
}


