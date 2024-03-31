module.exports = (client, ActivityType) => {
  client.on("ready", (c) => {
    console.log(`✅ ${c.user.tag} is online.`);
    client.user.setActivity({
      name: " Joan ล่าแย้",
      type: ActivityType.Watching,
    });
  });
};
