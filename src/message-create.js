require("dotenv").config();
const fs = require("fs");

const commands = [];

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`../commands/${file}`);
  commands.push(command);
}

module.exports = (client) => {
  client.on("messageCreate", async (message) => {
    try {
      const allowedChannels = [
        process.env.CHANNEL_TEST,
        process.env.CHANNEL_COMMAND,
      ];

      if (!allowedChannels.includes(message.channel.id)) {
        return;
      }

      const prefix = "!";

      if (!message.content.startsWith(prefix) || message.author.bot) return;

      const args = message.content.slice(prefix.length).split(/ +/);
      
      //Command
      const commandfind = commands.find((cmd) => cmd.name === args[0].toLowerCase());

      //Check Role
      const roleIdToCheck = '838009799437189121'; // Role ID ที่ต้องการตรวจสอบ
      const member = message.member;
      const roles = member.roles.cache;
      const hasRole = roles.has(roleIdToCheck);

      const validCommands = [
        "test",
        "vote",
        "status",
        "create",
        "live"
      ];

      if (commandfind) {
        if(hasRole) {
          commandfind.execute(message, args);
        } else if(!validCommands.includes(args[0].toLowerCase())) {
          commandfind.execute(message, args);
        } else {
          message.reply(
            `คำสั่งผิดโปรดตรวจสอบที่นี้ 👉<#${process.env.CHANNEL_MANUAL_COMMAND}>👈`
          );
        }
      } else {
        message.reply(
          `คำสั่งผิดโปรดตรวจสอบที่นี้ 👉<#${process.env.CHANNEL_MANUAL_COMMAND}>👈`
        );
      }
    } catch (error) {
      console.error('พบข้อผิดพลาด:', error);
    }
  });
};
