const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 86400,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription(" تم أرسال الرابط برسالة خاصة ")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription(" مدة الرابط : يوم  عدد استخدامات الرابط : 1 ")
      message.author.sendEmbed(Embed11)
    }
}); 
client.login('NDM5MTQwNjk1MDAxNzkyNTEy.DcO_ng.7hLxSETvPJVvelEGA7uGpgQBVEM');
