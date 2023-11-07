const { Events } = require("discord.js");

const mongoose = require("mongoose");
//.ENV
require("dotenv/config");
const mongodbUrl = process.env.MONGOPASS;

module.exports = {
  name: Events.ClientReady,
  once: true,
  async execute(client) {
    !mongodbUrl && console.log(`mongodb Url not provided @ ${mongodbUrl}`);
    try {
      await mongoose.connect(mongodbUrl, { keepAlive: true });
      console.log(`connected to mongodb Successfully`);
    } catch (error) {
      console.log(
        `couldn't counnect to mongodb: ERR=>couldn't counnect to mongodb${error}`
      );
    }
  },
};
