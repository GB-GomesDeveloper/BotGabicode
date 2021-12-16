const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const fs = require('fs');
const events = fs.readdirSync('./Events').filter(file => file.endsWith(".js"))
const enmap = require("enmap")
const prefix = "ga!"

 //Events

for (const file of events){
    const event = require(`./Events/${file}`);
    if(event.once){
        client.once(event.name, (...args) => event.run(...args, client, Discord, config, prefix));
    }else{
        client.on(event.name, (...args) => event.run(...args, client, Discord, config, prefix))
    }
}

// config

client.login(config.token)






client.on('ready', () =>{
console.log('Bot da Gabii Online!' + config.prefix)

const list = [`Olá Devs`, `Já viu meu canal hoje?`, `Meu prefix é ➔ ${config.prefix}`]




i = 0;

setInterval(() => client.user.setActivity({
    
name : `${list[i++ % list.length]}`,

type:"STREAMING", 

url:'https://www.twitch.tv/gabiwewe'

}), 7000)

client.user.setPresence({
    status: "idle"
})




})

client.on('message', message =>{
    if(message.channel.type == 'dm') {
        message.author.send(`${message.author}, Porfavor Não mande mensagens no meu privado!`).catch(err => console.log())
         return false;
    }
    if(!message.content.toLocaleLowerCase().startsWith(config.prefix.toLowerCase())) return;
    if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@!${client.user.id}`)) return
    const reply = message.content.trim().slice(config.prefix.length).split(/ +/g)
    const listdesrc = reply.shift().toLowerCase();
    try{
        let Importamento = require(`./GabiComandos/${listdesrc}.js`)
        Importamento.run(client, message, reply);
    } catch (err) {
const messageErro = new Discord.MessageEmbed()
.setColor('PURPLE')
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
.setTitle('Achei Um Erro!')
.setDescription(`❌ ${message.author} Esse comando "${listdesrc}" não existe. **Digite: ${config.prefix}Ajuda**, para saber todos meus comandos!`)
.setTimestamp()
.addField(`🧰 Achou algum erro?`, `[Click aqui!](https:discord.gg/yUWnDmwTWj)`)
.setURL("https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w")
.setThumbnail(message.guild.iconURL({dynamic: true}))
.setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic: true}))

message.channel.send(messageErro)

        console.error('Erro:' + err)
    }
})

const settings = new enmap({
    name: "gabrielgomes",
    autoFetch: true,
    cloneLevel: "deep",
    fetchAll: true
}) 

client.on('message', async message => {
     if(message.author.bot) return;
     if(message.content.indexOf(prefix) !== 0) return;

     const args = message.content.slice(prefix.length).trim().split(/ +/g);
     const command = args.shift().toLowerCase();
  
 if(!message.member.permissions.has('ADMINISTRATOR')){

     let embedPermission = new Discord.MessageEmbed()
     .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
     .setTitle(`Permição Não Concedida`)
     .setDescription(`❌ ${message.author}, Você não tem permição para esse comando! **(Isso será avisado aos staffs)**`)
     .addField('👮 Segue as regras em ->', `${message.guild.channels.cache.get('911432651397816390')}`)
     .setColor('PURPLE')
     .setTimestamp()
     .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
     .setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
     .setURL("https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w")
    
    
       return  message.channel.send(embedPermission)
 } else {

     if(command == "createticket") {
  
         let channel = message.mentions.channels.first();
         if(!channel) {

             let embedmenção = new Discord.MessageEmbed()
             .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
             .setTitle(`Preste Atenção!`)
             .setDescription(`⁉️ ${message.author}, Porfavor menciona um canal válido!`)
             .addField(`🎆 Exemplo ->`, "ga!createticket #canal")
             .setColor('PURPLE')
             .setTimestamp()
             .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
             .setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
             .setURL("https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w")

 
      return message.channel.send(embedmenção)

         }
  
         let sent = await channel.send(new Discord.MessageEmbed()
         .setAuthor(client.user.username, client.user.displayAvatarURL({dynamic: true}))
         .setTitle(`Gabii Ticket!`)
        .setDescription(`**Quer ter um orçamento ou criar um projeto feito pela equipe da GabiCode? 
         Clica no "✔️" que você vai ser direcionado para uma conversa com a equipe.**`)
         .addField(`👮‍♂️ Respeite as regras, para não ser banido! ➜`, `${message.guild.channels.cache.get("911432651397816390")}`)
         .setColor('PURPLE')
         .setTimestamp()
        .setThumbnail(message.guild.iconURL({dynamic : true}))
        .setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
        .setURL("https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w")


         );
  
         sent.react('✅');
         settings.set(`${message.guild.id}-ticket`, sent.id);
  
         message.channel.send(`Pronto ${message.author}, Embed criada!`)
     }
  
     if(command == "fechar") {
         if(!message.channel.name.includes("ticket・")) return message.channel.send(`Ei ${message.author}, você não pode usar esse comando aqui!`)
         message.channel.delete();
     }
 }
   });


 client.on('messageReactionAdd', async(gabriel4, user,) => {
     if(user.partial) await user.fetch();
     if(gabriel4.partial) await gabriel4.fetch()
     if(gabriel4.message.partial) await gabriel4.message.fetch()
     if(user.bot) return;

     let myid = await settings.get(`${gabriel4.message.guild.id}-ticket`);

     if(!myid) return;

     if(gabriel4.message.id == myid && gabriel4.emoji.name == "✅") {
         gabriel4.users.remove(user);

     gabriel4.message.guild.channels.create(`ticket・${user.username}`, {
         permissionOverwrites: [
             {
                 id: user.id,
                 allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
             },
             {
                 id: gabriel4.message.guild.roles.everyone,
                 deny: ["VIEW_CHANNEL"]
             }
         ],
         type: 'text'
     }).then(gb => {

         let ticket = new Discord.MessageEmbed()
         .setAuthor(user.username, user.displayAvatarURL({dynamic: true}))
         .setTitle(`Gabii Ticket`)
         .setColor('PURPLE')
         .setDescription(`🥰 ${user}, **Seja bem vindo, oque deseja? ${user}, te peço um favor, quando for fazer qualquer pergunta, aguarde ser respondido!**`)
         .setTimestamp()
         .setThumbnail(gabriel4.message.guild.iconURL({dynamic : true}))
         .setFooter(`${gabriel4.message.guild.name} - Alguns direitos reservados ®`, gabriel4.message.guild.iconURL({dynamic:true}))
         .setURL("https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w")

         gb.send(ticket).then(g2 =>{
             g2.react('✅')
         })
     })

 }
 })

client.on('message', message =>{
    const args1 = message.content.slice(prefix.length).trim().split(/ +/g);
    const command2 = args1.shift().toLowerCase();
    
    if(message.content.indexOf(prefix) !== 0) return;

    if(message.channel.type == "dm") return false
    let cargo = message.guild.roles.cache.get('913840674057642024')

    if(!message.member.permissions.has('ADMINISTRATOR')){

        let embedPermission2 = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
.setTitle(`Permição Não Concedida`)
.setDescription(`❌ ${message.author}, Você não tem permição para esse comando! **(Isso será avisado aos staffs)**`)
.addField('👮 Segue as regras em ->', `${message.guild.channels.cache.get('911432651397816390')}`)
.setColor('PURPLE')
.setTimestamp()
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
.setURL("https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w")


  return  message.channel.send(embedPermission2)

    } else {
    if(command2 == "desmute"){

        const menção2 = message.mentions.members.first() || message.guild.members.cache.get(args1[0])

        if(!menção2){
            let embedmenção1 = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
            .setTitle(`Preste Atenção!`)
            .setDescription(`⁉️ ${message.author}, Porfavor menciona um membro válido!`)
            .addField(`🎆 Exemplo ->`, "`ga!desmute @indivíduo`")
            .setColor('PURPLE')
            .setTimestamp()
            .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
            .setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
            .setURL("https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w")

            return message.channel.send(embedmenção1)
        } else {
            message.reply(`Ok. Desmutei o ${menção2}!`)
            return menção2.roles.remove(cargo)

        } 
    }
}

})

const usersMap = new Map();
const LIMIT = 7;
const DIFF = 5000;

client.on('message', async(message) => {

    if(message.author.bot) return;

    if(message.channel.type == "dm") return false
       let cargo = message.guild.roles.cache.get('913840674057642024')

    if(usersMap.has(message.author.id)) {
        const userData = usersMap.get(message.author.id);
        const { lastMessage, timer } = userData;
        const difference = message.createdTimestamp - lastMessage.createdTimestamp;
        let msgCount = userData.msgCount;
        console.log(difference);

        if(difference > DIFF) {
            clearTimeout(timer);
            console.log('Limite de tempo limite');
            userData.msgCount = 1;
            userData.lastMessage = message;
            userData.timer = setTimeout(() => {
                usersMap.delete(message.author.id);
                console.log('Removido do mapa.')
            }, 5000);
            usersMap.set(message.author.id, userData)
        }
        else {
            ++msgCount;
            if(parseInt(msgCount) === LIMIT) {

                message.reply(`👮‍♂️ Você foi mutado por Flood, leia as regras novamente. Isso será avisado os Staffs!`)
               
                const avisostaffs = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
                .setTitle('Atênção Staffs')
                .setDescription(`👮 Staffs, o Membro ${message.author}, Foi mutado Por Flood!`)
                .addField(`Não sabe os comandos de Admistração? ->`, `Digite **${config.prefix}ajuda** `)
                .setColor('PURPLE')
                .setTimestamp()
                .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                .setFooter(`${message.guild.name} - Alguns direitos reservados ®`, message.guild.iconURL({dynamic:true}))
                .setURL("https://www.youtube.com/channel/UCQ-dBcavpZ1Wj2OZdo9JU1w")
            
                message.guild.channels.cache.get('911067021712695309').send(avisostaffs).then(gb =>{
                gb.react('😡')}) 



                message.member.roles.add(cargo)


              message.channel.bulkDelete(LIMIT);
               
            } else {
                userData.msgCount = msgCount;
                usersMap.set(message.author.id, userData);
            }
        }
    }
    else {
        let fn = setTimeout(() => {
            usersMap.delete(message.author.id);
            console.log('Removido do mapa.')
        }, 5000);
        usersMap.set(message.author.id, {
            msgCount: 1,
            lastMessage : message,
            timer : fn
        });
    }
})


client.on('message', message =>{
    if(message.channel.type == 'dm') {
         return false;
    } else{

        
        
        if(message.channel.name.includes("💬│geral")){
            if(message.content.includes("https".toLowerCase() || ".com".toLowerCase() || "https".toLowerCase || "www".toLowerCase || ".br".toLowerCase())){
                message.delete()
                return message.channel.send(`${message.author}, Não mande links aqui Ok? Você pode mandar em outros canais. Cuidado!`)
            }
        }
        
        if(message.channel.name.includes("😁│apresentação")){
            if(message.content.includes("https".toLowerCase() || ".com".toLowerCase() || "https".toLowerCase || "www".toLowerCase || ".br".toLowerCase())){
                message.delete()
                return message.channel.send(`${message.author}, Não mande links aqui Ok? Você pode mandar em outros canais. Cuidado!`)
            }
            
        }
        
    if(message.channel.name.includes("👨│english")){
        if(message.content.includes("https".toLowerCase() || ".com".toLowerCase() || "https".toLowerCase || "www".toLowerCase || ".br".toLowerCase())){
            message.delete()
            return message.channel.send(`${message.author}, Não mande links aqui Ok? Você pode mandar em outros canais. Cuidado!`)
        }
        
    }
    
    if(message.channel.name.includes("📑│sugestões-gerais")){
        if(message.content.includes("https".toLowerCase() || ".com".toLowerCase() || "https".toLowerCase || "www".toLowerCase || ".br".toLowerCase())){
            message.delete()
            return message.channel.send(`${message.author}, Não mande links aqui Ok? Você pode mandar em outros canais. Cuidado!`)
        }
        
    }
    
    if(message.channel.name.includes("🎥│sugestões-de-vídeo")){
        if(message.content.includes("https".toLowerCase() || ".com".toLowerCase() || "https".toLowerCase || "www".toLowerCase || ".br".toLowerCase())){
            message.delete()
            return message.channel.send(`${message.author}, Não mande links aqui Ok? Você pode mandar em outros canais. Cuidado!`)
        }
        
    }
    
    if(!message.channel.name.includes("🤖│testes-bots")){
        if(message.content.includes("https://discord.gg/".toLowerCase() || "https://discord.gg/".toLowerCase())){
            message.delete()
            return message.channel.send(`${message.author}, Aqui na comunidade **${message.guild.name}**, não é permitido divulgação de outros servidores!`)
        }
    }
    
}
}) 