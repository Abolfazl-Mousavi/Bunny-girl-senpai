const { Events } = require("discord.js");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(
      `servers currently joined:\n${client.guilds.cache.map(
        (guild) => `${guild}\n`
      )}`
    );
  },
};
