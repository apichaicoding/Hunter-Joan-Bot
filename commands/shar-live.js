require("dotenv").config();
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "shar-live",
  execute: async (message, value1, value2) => {
    // ตรวจสอบว่าผู้ใช้ที่ส่งข้อความมาเป็นผู้ใช้จริงหรือไม่
    if (!message.author) return;

    const channel = message.guild.channels.cache.get(process.env.CHANNEL_FIND_FRIEND);
    if (!channel) return console.error("Invalid channel ID");

    if (value2 != "") {
      value2 = value2.replace("/clip", "/Clip");

      // สร้าง embed
      const exampleEmbed = new EmbedBuilder()
        .setColor(0xeb9b34)
        .setTitle('มาไลฟ์กันเถอะ')
        .setURL(
          "https://www.tiktok.com/@valkillerchannel/live?enter_from_merge=share&enter_method=share_copy_link"
        )
        .setAuthor({
          name: "Valkiller Channel",
          iconURL:
            "https://cdn.discordapp.com/attachments/1136706677748531240/1215354184422133880/LOGO_2023.png?ex=65fc71c9&is=65e9fcc9&hm=f28ee0c0f617f4805cc55759c7bc182135d714f55c6465fd26e852edddb18a10&",
          url: "https://www.tiktok.com/@valkillerchannel?is_from_webapp=1&sender_device=pc",
        })
        .setDescription("Valkiller Channel is now live on Tiktok!")
        .addFields({ name: "Description", value: "เริ่ม 20:30 - 23:00" })
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/1136706677748531240/1215354184422133880/LOGO_2023.png?ex=65fc71c9&is=65e9fcc9&hm=f28ee0c0f617f4805cc55759c7bc182135d714f55c6465fd26e852edddb18a10&"
        )
        .setImage(value2)
        .setTimestamp()
        .setFooter({
          text: "Tiktok Live",
          iconURL:
            "https://store-images.s-microsoft.com/image/apps.4784.13634052595610511.c45457c9-b4af-46b0-8e61-8d7c0aec3f56.3d483847-81a6-4078-8f83-a35c5c38ee92?h=464",
        });

      // ส่ง embed กลับไปยังผู้ใช้ที่ส่งข้อความมา
      channel.send({ embeds: [exampleEmbed] });
    }
  },
};
