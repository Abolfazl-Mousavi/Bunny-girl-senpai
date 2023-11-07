const { Events } = require("discord.js");

module.exports = {
  name: Events.GuildMemberAdd,
  async execute(member) {
    const channelID = "1103385717498982450";
    const channel = member.guild.channels.cache.get(channelID);
    await channel.send(
      `Welcome, ${member}! 💖✨ Let's embark on a kawaii adventure together in this server 🌸🌟`
    );
    await member.send(
      `Welcome, ${member}!\nPlease take a moment to review our server https://discord.com/channels/1103047022145183775/1103385315588194405 to ensure a harmonious experience for all members. Your friendly and respectful participation is greatly appreciated.`
    );
  },
};
