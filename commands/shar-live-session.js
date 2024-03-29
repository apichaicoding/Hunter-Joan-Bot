require("dotenv").config();
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "shar-live-session",
  execute: async (message, value1, value2, value3) => {
    // ตรวจสอบว่าผู้ใช้ที่ส่งข้อความมาเป็นผู้ใช้จริงหรือไม่
    if (!message.author) return;

    const channel = message.guild.channels.cache.get(process.env.CHANNEL_FIND_FRIEND);
    // const channel = message.guild.channels.cache.get(process.env.CHANNEL_TEST);

    if (!channel) return console.error("Invalid channel ID");

    if (value2 != "" && value3 != "") {
      
      // สร้าง embed
      const exampleEmbed = new EmbedBuilder()
        .setColor(0xeb9b34)
        .setTitle("มาไลฟ์กันเถอะ กดดูไลฟ์ตรงนี้ได้เลย")
        .setURL(
          "https://www.tiktok.com/@valkillerchannel/live?enter_from_merge=share&enter_method=share_copy_link"
        )
        .setAuthor({
          name: "Tiktok Valkiller Channel",
          iconURL:
            "https://cdn.discordapp.com/attachments/1136706677748531240/1215354184422133880/LOGO_2023.png?ex=65fc71c9&is=65e9fcc9&hm=f28ee0c0f617f4805cc55759c7bc182135d714f55c6465fd26e852edddb18a10&",
          url: "https://www.tiktok.com/@valkillerchannel?is_from_webapp=1&sender_device=pc",
        })
        .setDescription("⬆️ อย่าลืมไปโหวตกันด้วยไลฟ์ครั้งถัดไปภาคไร")
        .addFields(
          { name: 'ล่าแย้ทุกวัน', value: 'จ. - พฤ.', inline: true },
          { name: 'เนื้อเรื่องทุกวัน', value: 'ส.', inline: true },
          { name: 'เวลา', value: '20:30 - 23:00', inline: true },
          { name: 'Session', value: `\`\`\`${value2}\`\`\``},
        )
        .setImage(value3)

      // ส่ง embed กลับไปยังผู้ใช้ที่ส่งข้อความมา
      channel.send({ embeds: [exampleEmbed] });
    }
  },
};
