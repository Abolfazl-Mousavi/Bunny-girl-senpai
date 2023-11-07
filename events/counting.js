const { Events } = require("discord.js");
const counting = require("../schemas/counting");

module.exports = {
  name: Events.MessageCreate,

  async execute(message) {
    const channel = "1160356814358073494";
    const user = message.author.id;
    const number = parseInt(message.content);
    if (!message.guild) return;
    if (message.author.bot) return;
    const db = await counting.findOne({ GuildID: message.guild.id });

    if (message.channel.id !== channel) return;
    else {
      if (number !== db.Number) {
        message.delete();
      } else if (user === db.LastUser) {
        message.delete();
      } else {
        db.LastUser = user;
        db.Number = db.Number + 1;
        db.save();
      }
    }
  },
};
