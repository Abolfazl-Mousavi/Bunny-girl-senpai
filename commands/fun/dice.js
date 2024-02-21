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
    const sides = interaction.options.getNumber("sides");
    await interaction.reply({
      content: `${Math.floor(Math.random() * (sides - 1) + 1)}`,
    });
  },
};
