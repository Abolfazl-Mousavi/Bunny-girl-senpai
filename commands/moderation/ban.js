const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Select a member and ban them.")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The member to ban")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("reason").setDescription("The reason for banning")
    )
    .addNumberOption((option) =>
      option
        .setName("deletemessagedays")
        .setDescription("Deleting users Messages")
        .setMaxValue(168)
        .addChoices(
          { name: "Don't delete", value: 0 },
          { name: "Prev Hour", value: 1 },
          { name: "Prev 6 Hours", value: 6 },
          { name: "Prev 12 Hours", value: 12 },
          { name: "Prev Day", value: 24 },
          { name: "Prev 3 Day", value: 72 },
          { name: "Prev 7 Day", value: 168 }
        )
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers) // permission check
    .setDMPermission(false), // not active on DMs
  async execute(interaction) {
    const target = interaction.options.getUser("target");
    const deleteMessageSeconds =
      interaction.options.getNumber("deletemessagedays");
    const reason =
      interaction.options.getString("reason") ?? "No reason provided";
    await interaction.deferReply();

    await target
      .send(
        `:no_entry:BAN:You are banned from VictorSenpai's Server for this reason: ${reason}\n if you have any complains use >help`
      )
      .catch((err) => console.log(err))
      .finally(() => {
        interaction.guild.members
          .ban(target, {
            deleteMessageSeconds: 60 * 60 * 24 * deleteMessageSeconds,
            reason: reason,
          })
          .catch((err) => {
            console.log(err);
          });
      });

    await interaction.editReply(
      `Banning @${target.username} for reason: ${reason}`
    );
  },
};
