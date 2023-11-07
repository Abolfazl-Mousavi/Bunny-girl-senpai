const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("directmessage")
    .setDescription("Sends you a DM")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("The message you want to recive")
        .setRequired(true)
    ),

  async execute(interaction) {
    const input = interaction.options.getString("input");
    await interaction.user.send(input);
    await interaction.reply({
      content: `Sent you : ${input}`,
      ephemeral: true,
    });
    
  },
};
