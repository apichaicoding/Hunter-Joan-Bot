require("dotenv").config();
const { db } = require(process.env.FIREBASE_PATH);
const { AttachmentBuilder } = require('discord.js');

module.exports = {
  name: "test",
  execute: async (message, command) => {
    const mode = command[1].toLowerCase();
    const search = command.slice(2).join(' ').toLowerCase();
    // ตรวจสอบว่าผู้ใช้ที่ส่งข้อความมาเป็นผู้ใช้จริงหรือไม่
    if (!message.author) return;

    // const channel = message.guild.channels.cache.get(process.env.CHANNEL_COMMAND);
    const channel = message.guild.channels.cache.get(process.env.CHANNEL_TEST);

    if (!channel) return console.error("Invalid channel ID");

    if (mode == "gq" || mode == "vq") {
      try {
        const collectionName = "p3";
        const docRef = db.collection(collectionName).doc("key-quest");
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

    }

  },
};

// require("dotenv").config();
// const { EmbedBuilder, AttachmentBuilder } = require("discord.js");
// const { db } = require(process.env.FIREBASE_PATH);

// module.exports = {
//   name: "test",
//   execute: async (message, command) => {
//     try {
//       const search = command.slice(1, -1).join(' ').toLowerCase();
//       const game = command[command.length - 1].toLowerCase()
  
//       // ตรวจสอบว่าผู้ใช้ที่ส่งข้อความมาเป็นผู้ใช้จริงหรือไม่
//       if (!message.author) return;
  
//       // const channel = message.guild.channels.cache.get(process.env.CHANNEL_COMMAND);
//       const channel = message.guild.channels.cache.get(process.env.CHANNEL_TEST);
  
//       if (!channel) return console.error("Invalid channel ID");
  
//       // กำหนดชื่อคอลเลกชันและเอกสารที่ต้องการอ่าน
//       const collectionName = game;
//       const documentIdSkillarmor = 'skillarmor';
//       const documentIdSearchSkillarmor = 'search-skillarmor';
//       const documentIdDecorations = 'decorations';

//       Promise.all([
//         db.collection(collectionName).doc(documentIdSearchSkillarmor).get(),
//         db.collection(collectionName).doc(documentIdSkillarmor).get(),
//         db.collection(collectionName).doc(documentIdDecorations).get()
//       ])
//         .then(results => {
//           const searchSkillarmor = results[0].data();
//           const skillarmor = results[1].data();
//           const decorations = results[2].data();

//           // เพิ่มเงื่อนไขเพื่อตรวจสอบ
//           if (!searchSkillarmor || !searchSkillarmor.hasOwnProperty(search)) {
//             return message.reply({ content: `เรียนคุณฮันเตอร์ **${message.member.displayName}**\nไม่พบสกิลดังกล่าวกรุณาตรวจสอบ\n[ชื่อสกิล]\n[ชื่อแต้ม]\n[ภาค]\nให้ถูกต้องค่ะ`});
//           }

//           const searchResult = searchSkillarmor[search];
//           const nameKey = skillarmor[searchResult]['name'];
//           const descriptionKey = skillarmor[searchResult]['description'];
//           const imageKey = skillarmor[searchResult]['image'];
//           const skillKey = skillarmor[searchResult]['skill'];
//           const decorationImage = decorations[imageKey];
      
//           // สร้าง embed
//           const exampleEmbed = new EmbedBuilder()
//             .setColor(0xeb9b34)
//             .setThumbnail(decorationImage)
//             .setTitle( `**สกิล\n${nameKey}**`)
//             .setDescription(`รายละเอียด\n${descriptionKey}`)

//           skillKey.forEach(skill => {
//             exampleEmbed.addFields(
//               { 
//                 name: `สกิล: ${skill.name}`, 
//                 value: `แต้ม: 【${skill.score}】\nผลลัพธ์: ${skill.description}` 
//               }
//             );
//           });
      
//           // ส่ง embed กลับไปยังผู้ใช้ที่ส่งข้อความมา
//           message.reply({ content: `เรียนคุณฮันเตอร์ **${message.member.displayName}**\nนี้คือสกิลที่ท่านต้องการค่ะ`, embeds: [exampleEmbed] });
//         })
//         .catch(err => {
//           console.error('เกิดข้อผิดพลาดในการอ่านข้อมูล:', err);
//         });
//     } catch (error) {
//       console.error('พบข้อผิดพลาด:', error);
//     }
//   },
// };

// require("dotenv").config();
// const { EmbedBuilde, AttachmentBuilder } = require("discord.js");
// const { db } = require(process.env.FIREBASE_PATH);

// module.exports = {
//   name: "test",
//   execute: async (message) => {
//     try {
  
//       // ตรวจสอบว่าผู้ใช้ที่ส่งข้อความมาเป็นผู้ใช้จริงหรือไม่
//       if (!message.author) return;

//       // กำหนดชื่อคอลเลกชันและเอกสารที่ต้องการอ่าน
//       const collectionName = 'p3';
//       const documentId = 'skillarmor'; // รหัสเอกสารของ Doc 'Ticket' ที่ต้องการอ่าน
//       const docRef = db.collection(collectionName).doc(documentId);
      
//       // อ่านข้อมูลจากคอลเลกชัน 'Material' และแสดงผลลัพธ์ใน console
//       docRef.get()
//         .then(snapshot => {
//           const documentCount = snapshot.data(); // นับจำนวนเอกสารที่ได้
//           console.log('จำนวนเอกสารทั้งหมด:', documentCount);
//         })
//         .catch(err => {
//           console.error('เกิดข้อผิดพลาดในการอ่านคอลเลกชัน:', err);
//         });
  
//       // const channel = message.guild.channels.cache.get(process.env.CHANNEL_FIND_FRIEND);
//       // const channel = message.guild.channels.cache.get(process.env.CHANNEL_TEST);
  
//       // if (!channel) return console.error("Invalid channel ID");
  
//       // สร้าง embed
//       // const exampleEmbed = new EmbedBuilder()
//       //   .setColor(0xeb9b34)
//       //   .setTitle("มาโหวตกันเถอะ")
//       //   .setDescription("จะทำการรวมระหว่าง Live + Discord")
//       //   .addFields(
//       //     { name: 'ตรารางโหวต', value: '1️⃣ => MHF1 บน PPSSPP(PC & Android)\n 2️⃣ => MHFU บน PPSSPP(PC & Android)\n 3️⃣ => MHP3 บน PPSSPP(PC & Android)\n 4️⃣ => MH3U บน Citra(PC & Android)\n 5️⃣ => MHFZ บน PC\n 6️⃣ => MHXX บน Citra(PC & Android)\n 7️⃣ => MHWI บน PC\n 8️⃣ => MHRS บน PC' },
//       //   )
  
//       // ส่ง embed กลับไปยังผู้ใช้ที่ส่งข้อความมา
//       // const sentMessage = await channel.send({ embeds: [exampleEmbed] });
//     } catch (error) {
//       console.error('พบข้อผิดพลาด:', error);
//     }
//   },
// };

// require("dotenv").config();
// const { AttachmentBuilder } = require("discord.js");
// const { db } = require(process.env.FIREBASE_PATH);
// const {
//   createCustomCanvas,
//   getCategorys,
//   setWeapon,
//   setElements,
//   setEquipment,
//   setDecorations,
// } = require("../utils/functionHunterinfo");

// module.exports = {
//   name: "test",
//   execute: async (message) => {
//     // ตรวจสอบว่าผู้ใช้ที่ส่งข้อความมาเป็นผู้ใช้จริงหรือไม่
//     if (!message.author) return;

//     try {
//       await db
//         .collection("Material")
//         .doc("Ticket")
//         .set({
//           "ตั๋ว ระดับ I": {
//             Rare: 1,
//             Price: 500,
//           },
//         });
//     } catch (error) {
//       console.error(error);
//       message.reply(
//         `**เกิดปัญหานิดหน่อย**\nรอคุณโจรดูให้ตอนนี้ตบมังกรดำอยู่ค่ะ`
//       );
//     }
//   },
// };

// module.exports = {
//   name: "test",
//   execute: async (message) => {
//     // ตรวจสอบว่าผู้ใช้ที่ส่งข้อความมาเป็นผู้ใช้จริงหรือไม่
//     if (!message.author) return;

//     // ดึง UID (User ID) ของผู้ใช้
//     const uid = message.author.id;

//     const getUser = await db.collection("hunters").doc(uid).get();
//     const getWeapon = await db.collection("category").doc("weapon").get();
//     const getElements = await db.collection("category").doc("elements").get();
//     const getEquipment = await db.collection("category").doc("equipment").get();
//     const getDecorations = await db.collection("category").doc("decorations").get();

//     try {
//       let userExists = false;
//       let getUserNew;

//       if (!getUser.exists) {
//         await db
//           .collection("hunters")
//           .doc(uid)
//           .set({
//             weapon: ["greatswords", 1],
//             namedecorations: [
//               "slot1",
//               "slot1",
//               "slot1",
//               "slot1",
//               "slot1",
//               "slot1",
//             ],
//             equipment: [0, 0, 0, 0, 0, 0],
//             decorations: [0, 0, 0, 0, 0, 0],
//             element: "",
//           });
//         getUserNew = await db.collection("hunters").doc(uid).get();
//       } else {
//         userExists = true;
//       }

//       const { canvas, ctx } = createCustomCanvas("#f5cca0");

//       const { dataWeapon, dataElements, dataEquipment, dataDecorations } =
//         getCategorys(
//           userExists ? getUser.data() : getUserNew.data(),
//           getWeapon.data(),
//           getElements.data(),
//           getEquipment.data(),
//           getDecorations.data()
//         );

//       await setWeapon(canvas, ctx, "#B4B4B8", dataWeapon);

//       await setElements(canvas, ctx, "#B4B4B8", dataElements);

//       await setEquipment(canvas, ctx, "#B4B4B8", dataEquipment);

//       await setDecorations(canvas, ctx, "#B4B4B8", dataDecorations);

//       message.reply({
//         content: `**เรียน Hunter: ${message.member.displayName}**\nนี้คือข้อมูลของท่านค่ะ`,
//         files: [new AttachmentBuilder(canvas.toBuffer(), "MHTH.png")],
//       });
//     } catch (error) {
//       console.error(error);
//       message.reply(
//         `**เกิดปัญหานิดหน่อย**\nรอคุณโจรดูให้ตอนนี้ตบมังกรดำอยู่ค่ะ`
//       );
//     }
//   },
// };

// module.exports = {
//   name: "test",
//   execute: async (message) => {
//     // ตรวจสอบว่าผู้ใช้ที่ส่งข้อความมาเป็นผู้ใช้จริงหรือไม่
//     if (!message.author) return;

//     try {
//     } catch (error) {
//       console.error(error);
//       message.reply(
//         `**เกิดปัญหานิดหน่อย**\nรอคุณโจรดูให้ตอนนี้ตบมังกรดำอยู่ค่ะ`
//       );
//     }
//   },
// };
