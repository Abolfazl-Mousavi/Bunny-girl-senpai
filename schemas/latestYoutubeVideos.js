const { model, Schema } = require("mongoose");

const LatestYoutubeVideos = new Schema({
  GuildID: String,
  LastVideo: Object,
  LatestVideos: Array,
  Author: String,
});

module.exports = model("LatestYoutubeVideos", LatestYoutubeVideos);
