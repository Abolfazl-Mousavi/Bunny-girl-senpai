const { Events } = require("discord.js");

const Parser = require("rss-parser");
const parser = new Parser();

const LatestYoutubeVideos = require("../schemas/latestYoutubeVideos");

//.ENV
require("dotenv/config");
const youtubeID = `UCWwuijyo4x78iXup5hOvkbw`; //process.env.YOUTUBE_CHANNEL_ID;

const endpoint = `https://www.youtube.com/feeds/videos.xml?channel_id=${youtubeID}`;
module.exports = {
  name: Events.ClientReady,

  async execute(client) {
    const channel = client.channels.cache.get(`1103397339437215896`);

    const db = await LatestYoutubeVideos.findOne({
      GuildID: "1103047022145183775",
    });
    const videos = await parser.parseURL(endpoint);

    setInterval(async () => {
      if (db.LastVideo.title === videos.items[0].title) return;
      else {
        db.LatestVideos = videos.items;
        db.LastVideo = videos.items[0];
        db.save();
        channel.send(
          `<@&1164633871111958558> ${db.Author}'s new video is out!\n${db.LastVideo.link}`
        );
      }
    }, 5 * 60 * 1000);

    console.log(`youtube videos notification is running...`);
  },
};
