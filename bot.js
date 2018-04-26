const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content.startsWith("رابط")) {
if(!message.channel.guild) return;

        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`  في الخاص ${message.guild.name}تم ارسالك رابط سيرفر `)
      message.channel.sendEmbed(embed).then(message => {message.delete(3000)})
              const EmbedMalek = new Discord.RichEmbed()
        .setColor("000000")
        .setDescription(`هذا الرابط لواحد مستحدم فقط لمده اربعه وعشرين ساعه${message.guild.name} رابط سيرفر  `) 
      message.author.sendEmbed(EmbedMalek)
    }
});

client.login('NDM5MTQwNjk1MDAxNzkyNTEy.DcO1Lg.dxZ8Wwk-Q7rUM0RbLWYnps1uF54');
