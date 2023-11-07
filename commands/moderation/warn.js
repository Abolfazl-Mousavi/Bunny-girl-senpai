const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const warnedMembers = require("../../schemas/warnedMembers");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("warn")
    .setDescription("warns the selected user.")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("the member to warn")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("reason").setDescription("The reason for warning")
    )

    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers) // permission check
    .setDMPermission(false), // not active on DMs
  async execute(interaction) {
    const { options, guildId, user } = interaction;
    const target = options.getMember("target");
    const reason =
      interaction.options.getString("reason") ?? "No reason provided";
    await interaction.deferReply();
    await warnedMembers
      .findOne({ GuildID: guildId, User: target.id })
      .then(async (db) => {
        if (!db) {
          db = new warnedMembers({
            GuildID: guildId,
            User: target.id,
            Warns: [{ ExecuterID: user.id, Reason: reason }],
          });
        } else {
          const createWarn = { ExecuterID: user.id, Reason: reason };
          db.Warns.push(createWarn);
        }
        db.save();
        if (db.Warns.length % 3 === 0 && db.Warns.length !== 0) {
          target.roles.add("1159206264534994994");
        }
      });

    await interaction.editReply(`warned @${target} for reason: ${reason}`);
    await target
      .send(`:x: WARN:${reason}\n if you have any complains use >help`)
      .catch((err) => console.log(err));
  },
};
