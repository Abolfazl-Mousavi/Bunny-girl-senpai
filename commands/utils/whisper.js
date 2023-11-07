const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("whisper")
    .setDescription("whispers your input!")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("The input to echo back")
        .setRequired(true)
    )
    .setDMPermission(false), // not active on DMs,
  async execute(interaction) {
    const input = interaction.options.getString("input");
    await interaction.reply({
      content: `sending...`,
      ephemeral: true,
    });
    await interaction.channel.send(`${input}`);
    await interaction.deleteReply();
  },
};
