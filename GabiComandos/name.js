const Discord = require("discord.js"); 
const config = require('../config.json')

exports.run = async(client, messsage, args) =>{
    
if(!messsage.member.permissions.has('ADMINISTRATOR')){
    
    messsage.delete().catch(err => console.log('Err bobo!'))


    const avisostaffs = new Discord.MessageEmbed()
    .setAuthor(messsage.author.username, messsage.author.displayAvatarURL({dynamic: true}))
    .setTitle('Atênção Staffs')
    .setDescription(`👮 Staffs, o Membro ${messsage.author}, Usou um codigo (${config.prefix}name) que ele não tem permição!`)
    .addField(`Não sabe os comandos de Admistração? ➔`, `Digite **${config.Prefix}ajuda** `)
    .setColor('PURPLE')
    .setTimestamp()
    .setThumbnail(messsage.author.displayAvatarURL({dynamic: true}))
    .setFooter(`${messsage.guild.name} - Alguns direitos reservados ®`, messsage.guild.iconURL({dynamic:true}))
    .setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w')
   
   messsage.client.channels.cache.get('911067021712695309').send(avisostaffs).then(gb =>{
    gb.react('😡')})



    const Embedpermission = new Discord.MessageEmbed()
.setAuthor(messsage.author.username, messsage.author.displayAvatarURL({dynamic: true}))
.setTitle(`Permição Não Concedida`)
.setDescription(`❌ ${messsage.author}, Você não tem permição para esse comando! **(Isso será avisado aos staffs)**`)
.addField('👮 Segue as regras em ➔', `${messsage.guild.channels.cache.get("911432651397816390")}`)
.setColor('PURPLE')
.setTimestamp()
.setThumbnail(messsage.guild.iconURL({dynamic: true}))
.setFooter(`${messsage.guild.name} - Alguns direitos reservados ®`, messsage.guild.iconURL({dynamic:true}))
.setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w')

 return messsage.channel.send(Embedpermission)

}

let nome = args.slice(0).join(" ")


if(nome.bannable){
    messsage.channel.send('teste')
}


    if(!nome){
        const aviso = new Discord.MessageEmbed()
        .setTitle('Preste atenção!')
        .setAuthor(messsage.author.username, messsage.author.displayAvatarURL({dynamic: true}))
        .setDescription(`❌ ${messsage.author}, Escreva algum nome, para mudar o nome do ${client.user}!
        Exmplo: **'${config.prefix}name Gabii'**`)
        .setColor('PURPLE')
        .setTimestamp()
        .setThumbnail(messsage.author.displayAvatarURL({dynamic: true}))
        .setFooter(`${messsage.guild.name} - Alguns direitos reservados ®`, messsage.guild.iconURL({dynamic:true}))
        .setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w')
        
            return messsage.channel.send(aviso)
} else {


if(!client.user.setUsername(nome).catch(err =>  messsage.channel.send(`${messsage.author}, Esse nome **"${nome}"** já existe. Tente novamente! Se esse erro continuar, você tem que esperar 1hora.`, `Erro: ${err}`))){


} else{
    messsage.guild.channels.cache.get('911067021712695309').send(`O nome do ${client.user} foi mudado para **"${nome}"** / Para conferir olhe o perfil do bot!`)
}

}
 
}

// Depois analizar 