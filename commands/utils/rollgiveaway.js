const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rollgiveaway")
    .setDescription("Lets see who is the winner"),
  async execute(interaction) {
    //does smth
  },
};
