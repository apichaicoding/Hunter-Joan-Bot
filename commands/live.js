require("dotenv").config();
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "live",
  execute: async (message, command) => {
    // ตรวจสอบว่าผู้ใช้ที่ส่งข้อความมาเป็นผู้ใช้จริงหรือไม่
    if (!message.author) return;

    const channel = message.guild.channels.cache.get(process.env.CHANNEL_SHOW_COOL);
    // const channel = message.guild.channels.cache.get(process.env.CHANNEL_TEST);

    if (!channel) return console.error("Invalid channel ID");

    if (message.attachments.size > 0) {

      const attachment = message.attachments.first();

      if (!attachment.contentType.includes('image')) {
        return console.error("ไม่มีรูปแนบมา");
      }
      
      // สร้าง embed
      const exampleEmbed = new EmbedBuilder()
        .setColor(0xeb9b34)
        .setTitle("มาไลฟ์กันเถอะ")
        .setURL(
          "https://www.tiktok.com/@valkillerchannel/live?enter_from_merge=share&enter_method=share_copy_link"
        )
        .setAuthor({
          name: "Tiktok Valkiller Channel",
          iconURL:
            "https://cdn.discordapp.com/attachments/1136706677748531240/1215354184422133880/LOGO_2023.png?ex=65fc71c9&is=65e9fcc9&hm=f28ee0c0f617f4805cc55759c7bc182135d714f55c6465fd26e852edddb18a10&",
          url: "https://www.tiktok.com/@valkillerchannel?is_from_webapp=1&sender_device=pc",
        })
        // .setDescription("⬆️ อย่าลืมไปโหวตกันด้วยไลฟ์ครั้งถัดไปภาคไร")
        .addFields(
          { name: 'จ. - พ.', value: 'ล่าแย้\nเวลา 20:30 - 22:30', inline: true },
          { name: 'พฤ.', value: 'เสนอเกม\nเวลา 20:30 - 22:30', inline: true },
          { name: 'ส.', value: 'เกมเนื้อเรื่อง\nเวลา 20:30 - 22:30', inline: true },
        )
        .setImage(attachment.url)

      // ส่ง embed กลับไปยังผู้ใช้ที่ส่งข้อความมา
      channel.send({ content: `@everyone`, embeds: [exampleEmbed] });

    } else {
      return console.error("ข้อมูลไม่ครบถ้วน");
    }
  },
};
