const { Events, ActivityType } = require("discord.js");

module.exports = {
  name: Events.ClientReady,

  execute(client) {
    const botStatus = "🎧 Hi Senpai!!";
    client.user.setActivity({
      name: botStatus,
      type: ActivityType.Streaming,
      url: "https://www.twitch.tv/VictorSnpai",
    });
    console.log(`setBotStatus to ${botStatus}`);
  },
};
