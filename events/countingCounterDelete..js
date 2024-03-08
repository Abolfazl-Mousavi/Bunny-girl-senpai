const { Events } = require("discord.js");
const counting = require("../schemas/counting");

module.exports = {
  name: Events.MessageDelete,

  async execute(message) {
    if (message.author.bot) return;
    const channel = "1160356814358073494";
    if (message.channel.id !== channel) return;
    
    const db = await counting.findOne({ GuildID: message.guild.id });
    if (parseInt(message.content) === db.Number - 1) {
      message.channel.send(`<@${message.author.id}>${db.Number - 1}`);
    }
  },
};
