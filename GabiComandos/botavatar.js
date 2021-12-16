const Discord = require('discord.js');
const config = require('../config.json');

exports.run = async(client, messsage, args) =>{

    messsage.delete().catch(err => console.log('Err bobo!'))


    if(!messsage.member.permissions.has('ADMINISTRATOR')){

    const avisostaffs = new Discord.MessageEmbed()
    .setAuthor(messsage.author.username, messsage.author.displayAvatarURL({dynamic: true}))
    .setTitle('Atênção Staffs')
    .setDescription(`👮 Staffs, o Membro ${messsage.author}, Usou um codigo (${config.prefix}botavatar) que ele não tem permição!`)
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


let avatar = args.slice(0).join(" ");


if(!avatar){
    const aviso = new Discord.MessageEmbed()
    .setTitle('Preste atenção!')
    .setAuthor(messsage.author.username, messsage.author.displayAvatarURL({dynamic: true}))
    .setDescription(`❌ ${messsage.author}, Por favor digite a url certa!
    Exmplo: **'${config.prefix}botavatar URL'**`)
    .setColor('PURPLE')
    .setTimestamp()
    .setThumbnail(messsage.author.displayAvatarURL({dynamic: true}))
    .setFooter(`${messsage.guild.name} - Alguns direitos reservados ®`, messsage.guild.iconURL({dynamic:true}))
    .setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w')
    
        return messsage.channel.send(aviso)
} else{
   
   
 if(!client.user.setAvatar(avatar).catch(err => messsage.channel.send(`${messsage.author}, Digite por favor só URL .`))){

    
    } else{
      
        
     client.user.setAvatar(avatar).catch(err => messsage.channel.send(`Desculpa só funciona URL, não funciona isto **"${avatar}"**`))

     if(client.user.setAvatar(avatar)){
        messsage.channel.send(`${messsage.author}, Ok o Avatar do ${client.user} foi mudado!`)
    }
    }  

}}

// Tudo Ok