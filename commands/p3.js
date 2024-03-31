const path = require('path');
const fs = require("fs");
const { keyQuest } = require('../utils/keyquest');
const { cardSkillArmPoint } = require('../utils/cardskillarmpoint');

module.exports = {
  name: 'p3',
  execute: async (message, value1, value2, value3) => {
    value1 = value1.toLowerCase();
    value2 = value2.toLowerCase();
    value3 = value3.toLowerCase();
    
    if (value2 == "gh" || value2 == "va") {
      return await keyQuest(message, value1, value2, value3);
    } else if (value2 == "skillarmor") {
      const filePathSearchskillarmor = path.join(__dirname, '../models/datasearchskillarmor.json');
      const filePathSkillarmor = path.join(__dirname, '../models/dataskillarmor.json');

      try {
        const rawdataSearchskillarmor = await fs.promises.readFile(filePathSearchskillarmor, 'utf-8');
        const convertJsonSearchskillarmor = JSON.parse(rawdataSearchskillarmor);
        const searchSkilArmor = convertJsonSearchskillarmor.searchSkilArmorP3;

        for (const data of searchSkilArmor) {
          if (value3 === data.name.toLowerCase()) {
            const rawdataSkillarmor = await fs.promises.readFile(filePathSkillarmor, 'utf-8');
            const convertJsonSkillarmor = JSON.parse(rawdataSkillarmor);
            const skilArmor = convertJsonSkillarmor.skilArmorP3;
            return await cardSkillArmPoint(message, data.value, skilArmor);
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
}

// require("dotenv").config();
// const { EmbedBuilder } = require("discord.js");

// module.exports = {
//   name: "test",
//   execute: async (message, value1, value2) => {
//     value2 = value2.toLowerCase();

//     // ตรวจสอบว่าผู้ใช้ที่ส่งข้อความมาเป็นผู้ใช้จริงหรือไม่
//     if (!message.author) return;

//     // const channel = message.guild.channels.cache.get(process.env.CHANNEL_COMMAND);
//     const channel = message.guild.channels.cache.get(process.env.CHANNEL_TEST);

//     if (!channel) return console.error("Invalid channel ID");

//     // สร้าง embed
//     const exampleEmbed = new EmbedBuilder()
//       .setColor(0xeb9b34)
//       .setThumbnail("https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/P3%2FDecorations%2Fdecorations-green.png?alt=media&token=c9dbc78d-3e05-4368-9b4d-bbaed458ca87")
//       .setTitle( "สกิล: Health")
//       .setDescription("รายละเอียด\nเพิ่ม/ลด แถบพลังชีวิต")
//       .addFields({ name: "แต้ม: 【+15】\nสกิล: Health +50", value: "ผลลัพธ์: เพิ่มพลังชีวิต 50 หน่วย" })
//       .addFields({ name: "แต้ม: 【+10】\nสกิล: Health +20", value: "ผลลัพธ์: เพิ่มพลังชีวิต 20 หน่วย" })
//       .addFields({ name: "แต้ม: 【-10】\nสกิล: Health -10", value: "ผลลัพธ์: ลดพลังชีวิต 10 หน่วย" })
//       .addFields({ name: "แต้ม: 【-15】\nสกิล: Health -30", value: "ผลลัพธ์: ลดพลังชีวิต 30 หน่วย" })
//       // .setImage("https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/P3%2FDecorations%2Fdecorations-green.png?alt=media&token=c9dbc78d-3e05-4368-9b4d-bbaed458ca87")

//     // ส่ง embed กลับไปยังผู้ใช้ที่ส่งข้อความมา
//     channel.send({ embeds: [exampleEmbed] });

//   },
// };