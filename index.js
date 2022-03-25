require('dotenv')
const { Client,Util, Collection,MessageEmbed,Structures } = require("discord.js");
const keepAlive = require('./server.js')
keepAlive()
async function errorEmbed(text,message){
      const newembed = new Discord.MessageEmbed()
      .setColor("#FF7676")
      .setDescription(`**❌ | ${text} **`)
       return message.channel.send(newembed);
    }
const Discord = require('discord.js');

const client = new Client({
    disableEveryone: true
})
const axios = require("axios")


//=============================================
const channel_id = "954979145639682048"
//=============================================



client.on('message', async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  try {
  if (message.channel.id != channel_id) return
  let res = await axios.get(`https://api.simsimi.net/v2/?text=${encodeURIComponent(message.content)}&lc=vn`); //https://api.simsimi.net/v2/?text=hi&lc=vn
  message.reply(res.data.success);
  } catch {
   errorEmbed(`Bot error, please try again!`,message)
   }
})

client.on('ready', async () => {
    console.clear()
    client.user.setActivity("nghe nhạc chill cùng VMOS", { type: "STREAMING", url: "https://www.youtube.com/watch?v=7NOSDKb0HlU" })
    console.log(`██╗░░░██╗███╗░░░███╗░█████╗░░██████╗
██║░░░██║████╗░████║██╔══██╗██╔════╝
╚██╗░██╔╝██╔████╔██║██║░░██║╚█████╗░
░╚████╔╝░██║╚██╔╝██║██║░░██║░╚═══██╗
░░╚██╔╝░░██║░╚═╝░██║╚█████╔╝██████╔╝
░░░╚═╝░░░╚═╝░░░░░╚═╝░╚════╝░╚═════╝░`)
    console.log(`Đã đăng nhập với ${client.user.tag}`)
})


client.login(process.env.TOKEN);
