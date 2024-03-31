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
      const command1 = args.shift();
      let command2 = "";
      let command3 = "";

      if (args.length >= 1) {
        command2 = args[0];
      }
      if (args.length >= 2) {
        command3 = args.slice(1).join(" ");
      }

      //Command
      const command = commands.find((cmd) => cmd.name === command1.toLowerCase());

      //Check Role
      const roleIdToCheck = '838009799437189121'; // Role ID ที่ต้องการตรวจสอบ
      const member = message.member;
      const roles = member.roles.cache;
      const hasRole = roles.has(roleIdToCheck);

      const validCommands = ["test", "shar-live", "shar-live-session", "vote", "bot-status", "create-data"];

      if (command) {
        if(hasRole) {
          command.execute(message, command1, command2, command3);
        } else if(!validCommands.includes(command1.toLowerCase())) {
          command.execute(message, command1, command2, command3);
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
