const mongoose = require("mongoose");

const giveaways = new mongoose.Schema(
  {
    giveawayID: Number,
    startAt: Number,
    endAt: Number,
    ended: Boolean,
    winnerCount: Number,
    prize: String,
    giveawayEndedMessage: {
      giveaway: String,
      giveawayEndedAt: String,
      drawing: String,
      winners: String,
      hostedBy: String,
    },
    enterys: [String],
    hostedBy: String,
    winnerIds: { type: [String], default: undefined },
  },
  { id: false }
);

module.exports = mongoose.model("giveaways", giveaways);
