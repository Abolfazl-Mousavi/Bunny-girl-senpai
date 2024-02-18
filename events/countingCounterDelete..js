const { Events } = require("discord.js");
const counting = require("../schemas/counting");

module.exports = {
  name: Events.MessageDelete,

  async execute(message) {
    if (message.author.bot) return;

    const db = await counting.findOne({ GuildID: message.guild.id });
    if (parseInt(message.content === db.Number - 1)) {
      message.channel.send(`<@${message.author.id}>${message.content}`);
    }
  },
};
