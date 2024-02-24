require('dotenv').config();
const { keep_alive } = require("./keep_alive");
const guildMemberAdd = require("../events/guildMemberAdd");
const guildMemberRemove = require("../events/guildMemberRemove");
const fs = require("fs");
const { Client, GatewayIntentBits, ActivityType } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.MessageContent,
  ],
});

//Read File Command
const commands = [];

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`../commands/${file}`);
  commands.push(command);
}

//Ready
client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
  client.user.setActivity({
    name: "โจรล่าแย้",
    type: ActivityType.Watching,
  });
});

client.on("guildMemberAdd", (member) => {
  guildMemberAdd(member.guild, member);
});

client.on("guildMemberRemove", (member) => {
  guildMemberRemove(member.guild, member);
});

//meeageCreate
client.on("messageCreate", async (message) => {
  const allowedChannels = [
    process.env.CHANNEL_TEST,
    process.env.CHANNEL_COMMAND,
    process.env.TEST_CHANNEL_NORMAL,
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
    if(message.channel.id === process.env.CHANNEL_COMMAND && command1 === "test") {
      console.log("Not use Command!")
    } else {
      command.execute(message, command1, command2, command3);
    }
  } else {
    message.reply(`คำสั่งผิดโปรดตรวจสอบที่นี้ 👉<#${process.env.CHANNEL_MANUAL_COMMAND}>👈`);
  }
});

client.login(process.env.TOKEN);
