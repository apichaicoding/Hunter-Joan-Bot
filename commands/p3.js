require("dotenv").config();
const { db } = require(process.env.FIREBASE_PATH);
const { EmbedBuilder, AttachmentBuilder } = require("discord.js");

module.exports = {
  name: 'p3',
  execute: async (message, command) => {
    const game = command[0].toLowerCase();
    const mode = command[1].toLowerCase();
    const search = command.slice(2).join(' ').toLowerCase();
    
    if (mode == "gq" || mode == "vq") {
      try {
        const docRef = db.collection(game).doc("key-quest");
        const docSnapshot = await docRef.get();
  
        if (docSnapshot.exists) {
          const data = docSnapshot.data();

          if (mode == "gq" && search.startsWith('hr')) {

            if (data[search]) {
              // สร้าง AttachmentBuilder สำหรับทุก URL
              const urgentQuest = new AttachmentBuilder(data[search], { name: 'MHTH.png' });
  
              const nameQuest = "Guild Quests";
          
              // ส่ง Urgent ก่อน
              message.reply({
                content: `**เรียน Hunter: ${message.member.displayName}**\nเควส: ${nameQuest}\nระดับ: ${search.toUpperCase()}`,
                files: [urgentQuest]
              });
              
            } else {
              console.log('ไม่พบเอกสารที่ต้องการ');
              message.reply(`ขออภัยไม่พบ Key Quest ดังกล่าวกรุณาตรวจเช็คใหม่ที่นี้ 👉<#${process.env.CHANNEL_MANUAL_COMMAND}>👈`);
            }

          } else if(mode == "vq" && search.startsWith('lv')) {

            if (data[search]) {
              // สร้าง AttachmentBuilder สำหรับทุก URL
              const urgentQuest = new AttachmentBuilder(data[search], { name: 'MHTH.png' });
  
              const nameQuest = "Village Quests"
          
              // ส่ง Urgent ก่อน
              message.reply({
                content: `**เรียน Hunter: ${message.member.displayName}**\nเควส: ${nameQuest}\nระดับ: ${search.toUpperCase()}`,
                files: [urgentQuest]
              });
            } else {
              console.log('ไม่พบเอกสารที่ต้องการ');
              message.reply(`ขออภัยไม่พบ Key Quest ดังกล่าวกรุณาตรวจเช็คใหม่ที่นี้ 👉<#${process.env.CHANNEL_MANUAL_COMMAND}>👈`);
            }

          } else {
            console.log('ไม่พบเอกสารที่ต้องการ');
            message.reply(`ขออภัยไม่พบ Key Quest ดังกล่าวกรุณาตรวจเช็คใหม่ที่นี้ 👉<#${process.env.CHANNEL_MANUAL_COMMAND}>👈`);
          }
  
        } else {
          console.log('ไม่พบเอกสารที่ต้องการ');
          message.reply(`ขออภัยไม่พบ Key Quest ดังกล่าวกรุณาตรวจเช็คใหม่ที่นี้ 👉<#${process.env.CHANNEL_MANUAL_COMMAND}>👈`);
        }
  
      } catch (error) {
        // ดึงข้อมูลผู้ใช้จาก UserID
        let user = await message.client.users.fetch(process.env.USER_ID_ME).catch(console.error);
        if (!user) {
          console.log('ไม่พบผู้ใช้ดังกล่าว')
          return message.reply(`พบข้อผิดพลาด: รอเจ้าหน้าที่สุดหล่อมาตรวจสอบ`);
        };
  
        console.error('พบข้อผิดพลาด:', error);
        return message.reply(`พบข้อผิดพลาด: รอเจ้าหน้าที่สุดหล่อมาตรวจสอบ ${user}`);
      }

    } else if (mode == "skillarmor") {
      try {
        const docRef = db.collection(game).doc("search-skillarmor");
        const docSnapshot = await docRef.get();

        if (docSnapshot.exists) {
          const data = docSnapshot.data();

          if (data[search]) {
            const docRef2 = db.collection(game).doc("skillarmor");
            const docSnapshot2 = await docRef2.get();

            if (docSnapshot2.exists) {
              const search2 = data[search].value.toLowerCase().replace(/[*~/\[\].]/g, '-');
              const data2 = docSnapshot2.data();

              if (data2[search2]) {
                // สร้าง embed
                const exampleEmbed = new EmbedBuilder()
                  .setColor(0xeb9b34)
                  .setTitle( `สกิล: ${data2[search2].name}`)
                  .setDescription(`รายละเอียด\n${data2[search2].description}`)
                for (const data3 of data2[search2].skill) {
                  exampleEmbed.addFields({ name: `แต้ม: 【${data3.score}】\nสกิล: ${data3.name}`, value: `ผลลัพธ์: ${data3.description}` })
                }
                
                if(data2[search2].image != ''){
                  const docRef3 = db.collection(game).doc("decorations");
                  const docSnapshot3 = await docRef3.get();
      
                  if (docSnapshot3.exists) {
                    const image = data2[search2].image;
                    const data3 = docSnapshot3.data();
                    
                    if(data3[image]){
                      exampleEmbed.setThumbnail(data3[image]);
                        // .setImage(data2[search2].image)
                    }
                  }

                }

                // ส่ง embed กลับไปยังผู้ใช้ที่ส่งข้อความมา
                message.reply({
                  content: `**เรียน Hunter: ${message.member.displayName}**`,
                  embeds: [exampleEmbed]
                });

              } else {
                console.log('ไม่พบเอกสารที่ต้องการ');
                message.reply(`ขออภัยไม่พบ Skillarmor ดังกล่าวกรุณาตรวจเช็คใหม่ที่นี้ 👉<#${process.env.CHANNEL_MANUAL_COMMAND}>👈`);
              }
              
            } else {
              console.log('ไม่พบเอกสารที่ต้องการ');
              message.reply(`ขออภัยไม่พบ Skillarmor ดังกล่าวกรุณาตรวจเช็คใหม่ที่นี้ 👉<#${process.env.CHANNEL_MANUAL_COMMAND}>👈`);
            }

          } else {
            console.log('ไม่พบเอกสารที่ต้องการ');
            message.reply(`ขออภัยไม่พบ Skillarmor ดังกล่าวกรุณาตรวจเช็คใหม่ที่นี้ 👉<#${process.env.CHANNEL_MANUAL_COMMAND}>👈`);
          }

        } else {
          console.log('ไม่พบเอกสารที่ต้องการ');
          message.reply(`ขออภัยไม่พบ Skillarmor ดังกล่าวกรุณาตรวจเช็คใหม่ที่นี้ 👉<#${process.env.CHANNEL_MANUAL_COMMAND}>👈`);
        }

      } catch (error) {
        // ดึงข้อมูลผู้ใช้จาก UserID
        let user = await message.client.users.fetch(process.env.USER_ID_ME).catch(console.error);
        if (!user) {
          console.log('ไม่พบผู้ใช้ดังกล่าว')
          return message.reply(`พบข้อผิดพลาด: รอเจ้าหน้าที่สุดหล่อมาตรวจสอบ`);
        };

        console.error('พบข้อผิดพลาด:', error);
        return message.reply(`พบข้อผิดพลาด: รอเจ้าหน้าที่สุดหล่อมาตรวจสอบ ${user}`);
      }
    } else {
      message.reply(`ขออภัยไม่พบคำสั่งดังกล่าวกรุณาตรวจเช็คใหม่ที่นี้ 👉<#${process.env.CHANNEL_MANUAL_COMMAND}>👈`);
    }
  }
}