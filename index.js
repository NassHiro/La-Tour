const Discord = require("discord.js");
const bot = new Discord.Client(); 

var prefix = 't!'

bot.on ('message',message => {
    if (message.content === prefix + 'message'){
        const embed =new Discord.MessageEmbed()
        .setTitle('Pourquoi')
        .setDescription('Je te tape toi')
        .setColor('#ae1efc')
        message.channel.send(embed)
    }
    if (message.content === prefix + 'LaTour'){
        const embed =new Discord.MessageEmbed()
        .setTitle('La Tour Bot')
        .setDescription('Production Made by Nass')
        .setImage('https://cdn.discordapp.com/attachments/703000188293349511/707578712283021362/tumblr_px9zie2vfg1vsbo30o2_250.png')
        .setColor('#ff809b')
    message.channel.send(embed)
    }
})
bot.on ('message',message => {
  if (message.content === prefix + 'invitation'){
      const embed =new Discord.MessageEmbed()
      .setTitle("__**Voici un pass à partager**__")
      .setDescription('https://discord.gg/pDjrHXb')
      .setImage("https://pm1.narvii.com/6134/e40153ce557678a6761379c58ce43c85df508e59_hq.jpg")
      .setColor('#ae1efc')
      message.channel.send(embed)
    }
  })
  bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'général');
    var embedbvn = new Discord.MessageEmbed()
    .setDescription(`Bienvenue à ${member} dans __**La Tour :tokyo_tower:**__`)
    .setImage('https://images3.alphacoders.com/731/thumb-1920-731741.png')
    .setColor('#ae1efc')
return channel.send(embedbvn)

    })
    bot.on('guildMemberRemove', member => {
      const channel = member.guild.channels.cache.find(ch => ch.name === 'ui');
      var embedbvn = new Discord.MessageEmbed()
      .setDescription(`Au revoir à ${member} qui a malheureusement quitté __**La Tour :tokyo_tower:**__`)
      .setImage('https://risibank.fr/cache/stickers/d1498/149853-full.jpg')
      .setColor('#ae1efc')
  return channel.send(embedbvn)
})

  bot.on('message',message =>{
    if (message.content === prefix + 'avatar'){
      message.reply('Voici ton avatar' + message.author.displayAvatarURL());
  
    }
  }); 
  bot.on ('message',message => {
   if(message.content === prefix+'pileouface'){
function entierAleatoire(min, max){
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
var entier = entierAleatoire(1, 2);
if(entier == 1) return message.channel.send('pile')
if(entier == 2) return message.channel.send('face')
}
    })
  bot.on ('message',message => {
    if (message.content === prefix + 'ping'){
        message.channel.send('pong')
      }
    })
    bot.on ('message',message => {
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      if(command === "say"){
        let text = args.join(" ");
        message.delete();
        message.channel.send("> " + text);
      }
      })
      bot.on ('message',message => {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        if(command === "adminsay"){
          let text = args.join(" ");
          message.delete();
          var embed = new Discord.MessageEmbed()
          .setDescription(text)
          .setColor('#ae1efc')
          message.channel.send(embed);
        }
        })
      bot.on ('message',message => {
        if(message.content === prefix+'what'){
     function entierAleatoire(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
     }
     var entier = entierAleatoire(1, 2, 3, 4, 5);
     if(entier == 1) return message.channel.send('tu arrêtes de prendre vidéo')
     if(entier == 2) return message.channel.send('send nudes')
     if(entier == 3) return message.channel.send('envoies fesse')
     if(entier == 4) return message.channel.send('nass le bg de la night')
     if(entier == 5) return message.channel.send("c'est nass qui m'a crée")
     }
         })
    bot.on ('message',message => {
      if (message.content === prefix + 'help'){
          const embed =new Discord.MessageEmbed()
          .setTitle("__**Mes Commandes**__")
          .setDescription("Voici ci dessous, les commandes que vous pouvez effectuer")
          .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: '§invitation', value: 'vous donne linvitation unique pour **La Tour**', inline: true },
            { name: '§avatar', value: 'affiche votre photo de profil', inline: true },
            { name: '§', value: 'affiche votre photo de profil', inline: true },
          )
          .setColor('#ae1efc')
          message.channel.send(embed)
        }
      })
bot.on("ready", () => {
    console.log("Be ready")
    
    setInterval(function(){
      let status = statuses[Math.floor(Math.random() * statuses.length)]
      bot.user.setActivity(status, {url: "https://www.youtube.com/channel/UCq8X1sZNno0lwQHEL3p1b6Q?view_as=subscriber"});
    }, 10000) //temp avant changement !
  
    let statuses = [
      `Made by Nass`,
      `${prefix}help`
    ]
})
bot.login('NzA2ODM3NjI4NDM1MTY5MzQy.XrAFQg.5dDh3RRGX7ipsAio0a2sA76YHoQ')