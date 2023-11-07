const { model, Schema } = require("mongoose");

const counting = new Schema({
  GuildID: String,
  LastUser: String,
  Number: Number,
});

module.exports = model("counting", counting);
