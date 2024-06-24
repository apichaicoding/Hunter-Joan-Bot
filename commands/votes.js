require("dotenv").config();
const { PollLayoutType } = require("discord.js");

module.exports = {
  name: "votes",
  execute: async (message, command) => {

    // ตรวจสอบว่าผู้ใช้ที่ส่งข้อความมาเป็นผู้ใช้จริงหรือไม่
    if (!message.author) return;

    const channel = message.guild.channels.cache.get(process.env.CHANNEL_FIND_FRIEND);
    // const channel = message.guild.channels.cache.get(process.env.CHANNEL_TEST);

    if (!channel) return console.error("Invalid channel ID");

    await channel.send({
      content: `@everyone\nเลือกเกมที่อยากให้ไลฟ์\nสามารถบอกได้ถ้าอยากให้เพิ่ม\nกด "โหวต" ด้านล่าง` ,
      poll: {
        question: {text: "🎮 วันนี้เล่นตามขอ 🎮"},
        answers : [
          { text: 'ROV', emoji: '1️⃣'},
          { text: 'PUBG Mobile', emoji: '2️⃣'},
        ],
        allowMultiselect: false,
        duration: 3,
        layoutType: PollLayoutType.Default,
      },
    });

  },
};