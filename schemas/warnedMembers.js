const { model, Schema } = require("mongoose");

const warnedMembers = new Schema({
  GuildID: String,
  User: String,
  Warns: Array,
});

module.exports = model("warnedMembers", warnedMembers);
