const DiscordRPC = require("discord-rpc");
require("dotenv/config");
const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const RPC = new DiscordRPC.Client({ transport: "ipc" });

DiscordRPC.register(clientID);

//constants
const details = "Front-end Dev learning about Eiai";
const state = "watching Anime! or Editing code";
const setTimestamp = Date.now()-365*24*60*60*1000;
const largeImageKey = "https://s9.gifyu.com/images/SFLXV.gif"
const largeImageText = "こちのほわ効率的です";
const smallImageKey = "EiaiImage";

const intents = false;
const buttons = [
  {
    label: "Join my Server",
    url: "https://discord.gg/9pgP2b3r8S",
  },
];

async function initiateRpc() {
  if (!RPC) return;

  RPC.setActivity({
    details: details,
    state: state,
    startTimestamp: setTimestamp,
    largeImageKey: largeImageKey,
    largeImageText: largeImageText,
    smallImageKey: smallImageKey,
    intents: intents,
    buttons: buttons,
  });
}

RPC.on("ready", async () => {
  console.log("RPC-ready");
  initiateRpc();

  setInterval(() => {
    initiateRpc();
  }, 300 * 1000);
});

RPC.login({ clientId: clientID, clientSecret: clientSecret }).catch((err) =>
  console.error(err)
);
