const guildMemberAdd = require("../events/guildMemberAdd");
const guildMemberRemove = require("../events/guildMemberRemove");

module.exports = (client) => {
  client.on("guildMemberAdd", (member) => {
    guildMemberAdd(member.guild, member);
  });

  client.on("guildMemberRemove", (member) => {
    guildMemberRemove(member.guild, member);
  });
};
