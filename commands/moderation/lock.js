const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  PermissionsBitField,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lock")
    .setDescription("Toggles @everyone can message")
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels)

    .setDMPermission(false), // not active on DMs,
  async execute(interaction) {
    const { channel, guild } = interaction;
    interaction.reply("This Channel is now Locked.:lock:");
    channel.permissionOverwrites.edit(guild.id, {
      SendMessages: false,
      ViewChannel: true,
      CreatePrivateThreads: false,
      CreatePublicThreads: false,
    });
  },
};
