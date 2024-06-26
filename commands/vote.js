require("dotenv").config();
const { PollLayoutType } = require("discord.js");

module.exports = {
  name: "vote",
  execute: async (message, command) => {

    // ตรวจสอบว่าผู้ใช้ที่ส่งข้อความมาเป็นผู้ใช้จริงหรือไม่
    if (!message.author) return;

    const channel = message.guild.channels.cache.get(process.env.CHANNEL_FIND_FRIEND);
    // const channel = message.guild.channels.cache.get(process.env.CHANNEL_TEST);

    if (!channel) return console.error("Invalid channel ID");

    await channel.send({
      content: `@everyone\nเลือกภาคแล้วกด "โหวต" ด้านล่าง` ,
      poll: {
        question: {text: "🎮 วันนี้ล่าแย่ภาคไหนดี 🎮"},
        answers : [
          { text: 'MHF1 บน PPSSPP', emoji: '1️⃣'},
          { text: 'MHFU บน PPSSPP', emoji: '2️⃣'},
          { text: 'MHP3 บน PPSSPP', emoji: '3️⃣'},
          { text: 'MH3U บน Citra', emoji: '4️⃣'},
          { text: 'MHFZ บน PC', emoji: '5️⃣'},
          { text: 'MHXX บน Citra', emoji: '6️⃣'},
          { text: 'MHWI บน Steam', emoji: '7️⃣'},
          { text: 'MHRS บน Steam', emoji: '8️⃣'},
        ],
        allowMultiselect: false,
        duration: 3,
        layoutType: PollLayoutType.Default,
      },
    });

  },
};