const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("unban")
    .setDescription("unban a user")
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)

    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The member to unBan")
        .setRequired(true)
    )
    .setDMPermission(false), // not active on DMs,
  async execute(interaction) {
    const target = interaction.options.getUser("target");
    await interaction.deferReply();
    await interaction.editReply({
      content: `Unbaned ${target}`,
      ephemeral: true,
    });
    await interaction.guild.members
      .unban(target.id)
      .catch((err) => interaction.editReply(`couldn't unban ERR: ${err}`));

    await interaction.client.users
      .fetch(target.id)
      .catch((err) => console.log(err))
      .then((user) => {
        user.send(`:triangular_flag_on_post:you just got unbanned`);
      });
  },
};
