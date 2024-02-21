const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dice")
    .setDescription("Dice 🎲")
    .addNumberOption((option) =>
      option
        .setName("sides")
        .setDescription("How many sides your dice have?")
        .setRequired(true)
    ),
  async execute(interaction) {
    await interaction.reply({
      content: throwDice(),
    });
  },
};
function throwDice(max) {
  return Math.floor(Math.random() * (max - 1) + 1);
}
