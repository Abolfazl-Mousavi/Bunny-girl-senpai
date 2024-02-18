const { Events } = require("discord.js");
const counting = require("../schemas/counting");

module.exports = {
  name: Events.MessageDelete,

  async execute(message) {
    if (message.author.bot) return;

    message.channel.send(`<@${message.author.id}>${message.content}`);
  },
};
