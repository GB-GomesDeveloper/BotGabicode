const Discord = require('discord.js');
const config = require('../config.json')

exports.run = async (client, message, args) => {

message.delete().catch(err => console.log('Err bobo!'))


const ajuda = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
.setTitle(`Oque Deseja!`)
.setDescription(`🥰 ${message.author}, Aqui mostrarei todos os meus comandos, você tem 8 minutos para responder!`)
.addField(`👮‍♂️ Administração ➔`, `Digite **adm**`)
.addField(`⚙️ Configuração ➔`, `Digite **config**`)
.addField(`👨‍💻 Reportar Bug ➔`, `Digite **rb**`)
.addField(`😸 Público ➔`, `Digite **pb**`)
.setThumbnail(message.guild.iconURL({dynamic: true}))
.setTimestamp()
.setColor('PURPLE')
.setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
.setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w')


message.channel.send(ajuda).then(gb => {
    setTimeout(() => {
gb.delete().catch(err => console.log('Err bobo!'))

message.channel.send(`${message.author}, O tempo acabou!`).then(g2 =>{
    setTimeout(() => {
        g2.delete().catch(err => console.log('Err bobo!'))

    }, 9000)
})
    }, 50000)
})


const collecty = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 50000});

collecty.on('collect', message =>{
    if(message.content === "adm") {
        message.delete().catch(err => console.log('Err bobo!'))
        const Admembed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
        .setTitle('Todos os comandos de Administração!')
        .setDescription(`${message.author}, Aqui mostrarei todos os comandos de Administração`)
        .addField(`✔️ Comando de Ban ➣`, `**${config.prefix}ban @indivíduo Motivo** ➜ Explicação: Esse comando serve para banir membros do servidor!`)
        .addField(`✔️ Comando de Escrever ➣`, `**${config.prefix}escreva Texto** ➜ Explicação: Esse comando serve para a ${client.user} escrever algo para você!`)
        .addField(`✔️ Comando de Dm ➣`, `**${config.prefix}dm @indivíduo Texto** ➜ Explicação: Esse comando sever para mandar mensagem para membros!`)
        // .addField(`✔️ Comando de Botavatar ➣`, `**${config.prefix}listban ** ➜ Explicação: Esse comando serve para ver os membros que está banido!`) 
        .addField(`✔️ Comando de Mute ➣`, `**${config.prefix}mute** ➜ Explicação: Esse comando serve para mutar os membros!`)
        // .addField(`✔️ Comando de Name ➣`, `**${config.prefix}name** ➜ Explicação: Esse comando serve para Mudar o nome Bot!`)
        .addField(`✔️ Comando de Unban ➣`, `**${config.prefix}unban** ➜ Explicação: Esse comando serve para Desbanir membros!`)
        .addField(`✔️ Comando de Unmute ➣`, `**${config.prefix}unmute** ➜ Explicação: Esse comando serve para Desmutar os membros!`)
        .addField(`✔️ Comando de deletar ➣`, `**${config.prefix}deletar** ➜ Explicação: Esse comando serve para deletar as mensagens dos canais de texto!`)
        .addField(`✔️ Comando de Lista banidos ➣`, `**${config.prefix}listban** ➜ Explicação: Esse comando serve para ver a lista de todos membros banidos!`)
        .setTimestamp()
        .setColor('PURPLE')
        .setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
        .setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w') 

       return message.channel.send(Admembed).then(gb => {
           setTimeout(() => gb.delete(), 50000)
       })
    }
    })

collecty.on('collect', message => {
    if(message.content === "config"){

        message.delete().catch(err => console.log('Err bobo!'))

        const configembed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
        .setTitle('Todos os comandos de Configuração!')
        .setDescription(`${message.author}, Aqui mostrarei todos os comandos de Configuração`)
        .addField(`✔️ Comando de Botavatar ➣`, `**${config.prefix}listban ** ➜ Explicação: Esse comando serve para ver os membros que está banido!`) 
        .addField(`✔️ Comando de Name ➣`, `**${config.prefix}name** ➜ Explicação: Esse comando serve para Mudar o nome Bot!`)
        .setTimestamp()
        .setColor('PURPLE')
        .setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
        .setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w') 

       return message.channel.send(configembed).then(gb1 => {
           setTimeout(() => gb1.delete(), 50000)
       })
    }
}) 


collecty.on('collect', message =>{
    if(message.content === 'rb'){
        message.delete().catch(err => console.log('Err bobo!'))
        const rbembed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
        .setTitle('Todos os comandos de Reportar Bug!')
        .setDescription(`${message.author}, Aqui mostrarei todos os comandos de Reportar Bug`)
        .addField(`✔️ Comando de Bug ➣`, `**${config.prefix}bugreport ** ➜ Explicação: Esse comando serve para reportar bug do bot ${client.user}!`) 
        .setTimestamp()
        .setColor('PURPLE')
        .setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
        .setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w') 
       return message.channel.send(rbembed).then(gb2 => {
        setTimeout(() => gb2.delete(), 50000)
    })
    }
})


collecty.on('collect', message =>{
    if(message.content === 'pb'){
        message.delete().catch(err => console.log('Err bobo!'))
        const pbembed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
        .setTitle('Todos os comandos Público!')
        .setDescription(`${message.author}, Aqui mostrarei todos os comandos Público`)
        .addField(`✔️ Comando de ping ➣`, `**${config.prefix}ping ** ➜ Explicação: Esse comando serve para saber a latência da ${client.user} !`) 
        .setTimestamp()
        .setColor('PURPLE')
        .setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
        .setURL('https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w') 
       return message.channel.send(pbembed).then(gb3 => {
        setTimeout(() => gb3.delete(), 50000)
    })
    }
})

}