const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  EmbedBuilder,
} = require("discord.js");
const giveaways = require("../../schemas/giveaways");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("giveaway")
    .setDescription("Starts a giveaway.")
    .addStringOption((option) =>
      option.setName("prize").setDescription("The PRIZE").setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("endat")
        .setDescription("When will the giveaway end? (DAYS)")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option.setName("winnercount").setDescription("How many ppl will win?")
    )
    .addUserOption((option) =>
      option.setName("host").setDescription("who is giving?").setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("description")
        .setDescription("More information about the giveaway")
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator) // permission check
    .setDMPermission(false), // not active on DMs,

  async execute(interaction) {
    const { options } = interaction;

    const endAt = options.getInteger("endat");
    const winnerCount = options.getInteger("winnercount") || 1;
    const prize = options.getString("prize");
    const description = options.getString("description");
    const host = options.getMember("host");
    let endingAt = new Date(new Date().getTime() + endAt * 24 * 60 * 60 * 1000);
    await giveaways.create({
      giveawayID: new Date.now(),
      startAt: new Date.now(),
      endAt: endingAt,
      winnerCount: winnerCount,
      prize: prize,
      hostedBy: host,
    });

    const embed = new EmbedBuilder()
      .set({ name: `**${prize}**` })
      .setDescription(description);

    interaction.channel.send({ embeds: [embed] });
  },
};
