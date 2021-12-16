const Discord = require('discord.js');
const config = require('../config.json')

exports.run = async(client, messagens, args) => {

    messagens.delete().catch(err => console.log('Err bobo!'))


    if(!messagens.member.permissions.has('BAN_MEMBERS')){

        const avisostaffs = new Discord.MessageEmbed()
        .setAuthor(messagens.author.username, messagens.author.displayAvatarURL({dynamic: true}))
        .setTitle('Atênção Staffs')
        .setDescription(`👮 Staffs, o Membro ${messagens.author}, Usou um codigo (${config.prefix}unban) que ele não tem permição!`)
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
    
    
    const menção = args[0]
    

    const motivo = args.slice(1).join(" ")
    
    if(!menção){
        let embedmenção = new Discord.MessageEmbed()
        .setAuthor(messagens.author.username, messagens.author.displayAvatarURL({dynamic: true}))
        .setTitle(`Preste Atenção!`)
        .setDescription(`⁉️ ${messagens.author}, Porfavor menciona um membro válido!`)
        .addField(`👮‍♂️ Exemplo ➔`, `${config.prefix}unban  ID-indivíduo motivo`)
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
    
    
    if(!motivo){
        let embedmotivo = new Discord.MessageEmbed()
        .setAuthor(messagens.author.username, messagens.author.displayAvatarURL({dynamic: true}))
        .setTitle(`Preste Atenção!`)
        .setDescription(`⁉️ ${messagens.author}, Você Esqueceu de falar o motivo do desbanimento do indivíduo!`)
        .addField(`👮‍♂️ Exemplo ➔`, `${config.prefix}unban @indivíduo motivo`)
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
    .setDescription(`🤔 ${messagens.author}, Tem certeza que ter desbanir o membro <@!${menção}> ?`)
    .addField(`⁉️ Para Sim`, `Reaja ✔️`)
    .addField(`⁉️ Para Não`, `Reaja ❌`)
    .setColor('PURPLE')
    .setTimestamp()
    .setThumbnail(messagens.author.displayAvatarURL({dynamic: true}))
    .setFooter(`${messagens.guild.name} - Alguns direitos reservados ®`, messagens.guild.iconURL({dynamic:true}))
    .setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w')
    
    messagens.channel.send(certeza).then(Gabriel =>{
        Gabriel.react('✔️')
        Gabriel.react('❌')
        setTimeout(() => Gabriel.delete().catch(err => console.log('Err bobo!'))
        , 10000)
    
    let gabriel1 = (r, u) => r.emoji.name === "✔️" && u.id === messagens.author.id
    let gabriel2 = (r, u) => r.emoji.name === "❌" && u.id === messagens.author.id
    
    let msg01 = Gabriel.createReactionCollector(gabriel1);
    let msg02 = Gabriel.createReactionCollector(gabriel2);
    
    msg01.on('collect', gabrielgomes =>{

        messagens.guild.fetchBans().then(async bans => {
            if(bans.size == 0) {
              return messagens.reply("❌ Na lista de banidos, não tem ninguém com esse Id!")     
              
            } else {
       let banido = new Discord.MessageEmbed()
       .setAuthor(messagens.author.username, messagens.author.displayAvatarURL({dynamic: true}))
       .setTitle(`Membro Desbanido!`)
       .setDescription(`✔️ O membro <@!${menção}>, foi desbanido com sucesso!
       
       👮 Desbanido por ➔ ${messagens.author}
       
       ⁉️ Motivo do Desbanimento ➔ **${motivo}**
       
       `)
       .setColor('PURPLE')
       .setThumbnail(messagens.guild.iconURL({dynamic: true}))
       .setFooter(`${messagens.guild.name} - Alguns direitos reservados ®`, messagens.guild.iconURL({dynamic:true}))
       .setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w')
    
       messagens.channel.send(banido).then(msg =>{
           msg.react('😁')
           setTimeout(() => msg.delete().catch(err => console.log('Err bobo!'))
           , 7000);
       })
       
       let bUser = bans.find(banInfo => banInfo.user.id === menção);
    
        messagens.guild.members.unban(bUser.user.id).catch(err => messagens.channel.send(`❌ ${messagens.author} Esse membro ${menção}, já está desbanido. Erro  ➜ ${err}`).then(del => {
          setTimeout(() => del.delete().catch(err => console.log('Err bobo!'))
          , 7000)
       }))
    } try {

    } catch (err){
        messagens.channel.send('Erro:' + err)
    }
    })
})
    msg02.on('collect', gabrielgomes2 =>{
        messagens.channel.send(`**Ok ${messagens.author}, o panel foi encerrado.**`).then(a =>{
            setTimeout(() => a.delete().catch(err => console.log('Err bobo!'))
            , 7000);
        })
        Gabriel.delete().catch(err => console.log('Err bobo!'))

    })
    
    })
    
}

