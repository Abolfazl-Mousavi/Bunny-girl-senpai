const axios = require("axios");
const { Events, EmbedBuilder, GuildMFALevel } = require("discord.js");
const https = require("https");
const twitchNotifRole = `1164634148070248478`;
const decapi = `https://decapi.me/twitch`;
const twitchChannel = `VictorSnpai`;
module.exports = {
  name: Events.ClientReady,

 execute(client) {
   let isOnline = false;
  setInterval(() => {
     axios.get(`${decapi}/uptime/${twitchChannel}`).then((res) => {
       const status = res.data;
       if (status == `VictorSnpai is offline`) isOnline = false;
       if (status !== `VictorSnpai is offline` && !isOnline) {
        sendNotif(client);
        isOnline = true;
       }
     });
   }, 5 * 60 * 1000);
 
  console.log(`twitch notification is running...`);
 },
};

async function sendNotif(client) {
  const avatar = await axios.get(`${decapi}/avatar/${twitchChannel}`);
  const title = await axios.get(`${decapi}/title/${twitchChannel}`);
  const game = await axios.get(`${decapi}/game/${twitchChannel}`);
  const viewerCount = await axios.get(`${decapi}/viewercount/${twitchChannel}`);
  const videos = await axios.get(`${decapi}/videos/${twitchChannel}`);

  const twitchEmbed = new EmbedBuilder()
    .setColor(0x6441a5)
    .setTitle(title.data)
    .setURL(`https://twitch.tv/${twitchChannel}`)
    .setAuthor({
      name: `${twitchChannel} is live on Twitch!!`,
      iconURL: avatar.data,
      url: `https://twitch.tv/${twitchChannel}`,
    })
    .addFields(
      {
        name: "Game",
        value: game.data,
        inline: true,
      },
      {
        name: "Viewers",
        value: viewerCount.data,
        inline: true,
      }
    )
    .setImage(videos.data.match(/\bhttps?:\/\/\S+/gi))
    .setTimestamp(Date.now());

  const channel = client.channels.cache.get(`1103397339437215896`);
  channel.send({
    content: `@everyone I'm live on Twitch <:Twitch:1163423501059899473>
`,
    embeds: [twitchEmbed],
  });
}
