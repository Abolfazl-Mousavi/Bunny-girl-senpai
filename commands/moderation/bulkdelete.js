const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bulkdelete")
    .setDescription("Deletes a number of messages from this channel!")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addIntegerOption((option) =>
      option
        .setName("howmany")
        .setDescription("Number of messages to delete")
        .setRequired(true)
    )
    .setDMPermission(false), // not active on DMs,
  async execute(interaction) {
    const nom = interaction.options.getInteger("howmany");
    const channel = interaction.channel;
    interaction.reply("deleting...");
    await channel.bulkDelete(nom);
    await interaction.deleteReply();
  },
};
