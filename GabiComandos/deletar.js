const Discord = require('discord.js');
const config = require('../config.json');

exports.run = async(client, message, args) =>{

    message.delete().catch(err => console.log('Err bobo!'))

    if(!message.member.permissions.has('MANAGE_CHANNELS')){

        const avisostaffs = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
        .setTitle('Atênção Staffs')
        .setDescription(`👮 Staffs, o Membro ${message.author} Usou um codigo (${config.prefix}deletar) que ele não tem permição!`)
        .addField(`Não sabe os comandos de Admistração? ➔`, `Digite **${config.Prefix}ajuda** `)
        .setColor('PURPLE')
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
        .setURL("https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w")
    
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
    .setURL("https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w")
    
    return message.channel.send(Embedpermission)

    } else{

let numeros = parseInt(args[0], 10)
let apagadas = message.content.split(" ")


if(!numeros){
let embednumeros = new Discord.MessageEmbed() 
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
.setTitle(`Preste Atenção!`)
.setDescription(`⁉️ ${message.author}, **Porfavor me fala quantas mensagens quer apagar!**`)
.addField(`👨‍💻 Exemplo ➔`, `${config.prefix}deletar número`)
.setColor('PURPLE')
.setTimestamp()
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
.setURL("https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w")

return message.channel.send(embednumeros)
}

if(!numeros || numeros <1 || numeros > 100) {

let embedaviso = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
.setTitle(`Preste Atenção!`)
.setDescription(`⁉️ ${message.author}, **Eu só aceito de 1/100**`)
.setColor('PURPLE')
.setTimestamp()
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
.setURL("https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w")

    return message.channel.send(embedaviso)
}

const lista = await message.channel.messages.fetch({
    limit: numeros
});

message.channel.bulkDelete(lista, true)

const apagado = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
.setTitle(`<:4430checkmark:914831967269306428> Mensagens Apagada!`)
.setDescription(`${message.author}, **Foi apagada ${numeros}, Nesse canal com Sucesso.
Essa mensagem será apagada em 7 segundos** `)
.setColor('PURPLE')
.setThumbnail(message.guild.iconURL({dynamic:true}))
.setTimestamp()
.setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
.setURL("https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w")

message.channel.send(apagado).then(msg => {
    setTimeout(() => msg.delete().catch(err => console.log('Err bobo!'))
    , 7000)
    msg.react('✔️')
})

    }

} 
