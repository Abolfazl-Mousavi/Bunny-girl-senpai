const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cs")
    .setDescription("Head or Tails?"),
  async execute(interaction) {
    await interaction.reply({
      content: Math.floor(Math.random() * 2) == 0 ? "Head" : "Tails",
    });
  },
};
