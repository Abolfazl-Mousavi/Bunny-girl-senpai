const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Select a member and kick them.")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The member to kick")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("reason").setDescription("The reason for kickning")
    )

    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers) // permission check
    .setDMPermission(false), // not active on DMs
  async execute(interaction) {
    const target = interaction.options.getMember("target");

    const reason =
      interaction.options.getString("reason") ?? "No reason provided";
    await interaction.deferReply();

    await target
      .send(
        `:x:You are kicked from VictorSenpai's Server for this reason: ${reason}\n if you have any complains use >help`
      )
      .catch((err) => console.log(err))
      .finally(() => {
        interaction
          .editReply(`kicked @${target} for reason: ${reason}`)
          .then(() => target.kick());
      });
  },
};
