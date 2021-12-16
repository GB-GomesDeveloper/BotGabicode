const discord = require('discord.js');

exports.run = async(client, message, args) => {

let embedpong = new discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
.setTitle('Pong!')
.setDescription(`${message.author}, **Aqui mostrarei a latência da ${client.user}, e também da Api !**`)
.addField(`🤖 Latência ➔`, `${Date.now() - message.createdTimestamp}Ms`)
.addField(`⚙️ Latência da Api ➔`, `${Math.round(client.ws.ping)}Ms`)
.setThumbnail(message.guild.iconURL({dynamic: true}))
.setTimestamp()
.setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
.setURL("https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w") 
.setColor("PURPLE")

message.channel.send(embedpong).catch(err => console.log('Erro: ' + err))

}