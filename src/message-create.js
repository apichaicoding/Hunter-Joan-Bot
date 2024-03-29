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
  //meeageCreate
  client.on("messageCreate", async (message) => {
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
    const command1 = args.shift().toLowerCase();
    let command2 = "";
    let command3 = "";

    if (args.length >= 1) {
      command2 = args[0].toLowerCase();
    }
    if (args.length >= 2) {
      command3 = args.slice(1).join(" ").toLowerCase();
    }

    //Command
    const command = commands.find((cmd) => cmd.name === command1);

    if (command) {

      if (
        command1 !== "test" &&
        command1 !== "shar-live" &&
        command1 !== "shar-live-session"
      ) {
        command.execute(message, command1, command2, command3);
      } else if (
        message.channel.id === process.env.CHANNEL_TEST &&
        message.author.id === process.env.USER_ID_ME
      ) {
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

  });
  
};
