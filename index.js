const Discord = require("discord.js");

module.exports = {
  name: "mm",
  description: "mass Mute a voice channel",

  async run(_, message, __) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) {
      return message.channel.send("You don't have permission to use that. You need to have **Mute Members** permission.");
    }

    message.channel.send(embed);

    if (message.member.voice.channel) {
      let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
      for (const [memberID, member] of channel.members) member.voice.setMute(true)
    } else message.reply('You need to join a voice channel first!');
    
    message.delete();
  }
}