// const { Events } = require("discord.js");

// module.exports = {
//   name: Events.GuildMemberUpdate,

//   execute(client) {
//     const channel = "1103385717498982450";
//     const oldStatus = client.oldMember.premiumSince;
//     const newStatus = client.newMember.premiumSince;
//     if (!oldStatus && newStatus) {
//       channel.send(
//         `cheer @${client.newMember.user.tag} for boosting the server!`
//       );

//       client.newMember.send(
//         `:smiling_face_with_3_hearts:Thanks for boosting the server.`
//       );
//     }
//     if (oldStatus && !newStatus)
//       channel.send(
//         `@${client.newMember.user.tag} thanks for boosting the server! we love to see you again`
//       );
//     console.log(`serverBoost messages working!!`);
//   },
// };
