require("dotenv").config();
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "vote",
  execute: async (message) => {
    // ตรวจสอบว่าผู้ใช้ที่ส่งข้อความมาเป็นผู้ใช้จริงหรือไม่
    if (!message.author) return;

    const channel = message.guild.channels.cache.get(process.env.CHANNEL_FIND_FRIEND);
    // const channel = message.guild.channels.cache.get(process.env.CHANNEL_TEST);

    if (!channel) return console.error("Invalid channel ID");

    // สร้าง embed
    const exampleEmbed = new EmbedBuilder()
      .setColor(0xeb9b34)
      .setTitle("มาโหวตกันเถอะ")
      .setDescription("จะทำการรวมระหว่าง Live + Discord")
      .addFields(
        { name: 'ตรารางโหวต', value: '1️⃣ => MHF1 บน PPSSPP(PC & Android)\n 2️⃣ => MHFU บน PPSSPP(PC & Android)\n 3️⃣ => MHP3 บน PPSSPP(PC & Android)\n 4️⃣ => MH3U บน Citra(PC & Android)\n 5️⃣ => MHFZ บน PC\n 6️⃣ => MHXX บน Citra(PC & Android)\n 7️⃣ => MHWI บน PC\n 8️⃣ => MHRS บน PC' },
      )

    // ส่ง embed กลับไปยังผู้ใช้ที่ส่งข้อความมา
    const sentMessage = await channel.send({ embeds: [exampleEmbed] });

    // เพิ่มรีแอคชั่นในข้อความ
    for (let i = 1; i <= 8; i++) {
      await sentMessage.react(`${i}\uFE0F\u20E3`);
    }
  },
};