module.exports = (client, ActivityType) => {
  client.on("ready", (c) => {
    console.log(`✅ ${c.user.tag} is online.`);
    client.user.setActivity({
      name: "โจรล่าแย้",
      type: ActivityType.Watching,
    });
  });
};
