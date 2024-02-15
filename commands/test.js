require('dotenv').config();
const { AttachmentBuilder } = require("discord.js");
const { createCanvas, loadImage } = require("canvas");
const { db } = require(process.env.FIREBASE_PATH);

module.exports = {
  name: "test",
  execute: async (message) => {
    try {
      // อ่านข้อมูลทั้งหมดใน collection
      const collection = await db.collection("Hunters");
      const document = await collection.doc("Armors").get();
      const data = document.data();

      if (
        data["1_Heads"] &&
        data["2_Arms"] &&
        data["3_Chests"] &&
        data["4_Waists"] &&
        data["5_Legs"] &&
        data["6_Talismans"]
      ) {
        const heads = data["1_Heads"]["Rare I"];
        const arm = data["2_Arms"]["Rare I"];
        const chest = data["3_Chests"]["Rare I"];
        const waist = data["4_Waists"]["Rare I"];
        const leg = data["5_Legs"]["Rare I"];
        const talisman = data["6_Talismans"]["Rare I"];

        const canvas = createCanvas(2000, 1000);
        const ctx = canvas.getContext("2d");

        // โหลดรูปภาพและรอให้เสร็จสมบูรณ์
        const headsImage = await loadImage(heads);
        const armImage = await loadImage(arm);
        const chestImage = await loadImage(chest);
        const waistImage = await loadImage(waist);
        const legImage = await loadImage(leg);
        const talismanImage = await loadImage(talisman);

        // ให้รอแก้ไขตรงนี้
        ctx.drawImage(headsImage, 250, 500, 200, 200);
        ctx.drawImage(armImage, 500, 500, 200, 200);
        ctx.drawImage(chestImage, 750, 500, 200, 200);
        ctx.drawImage(waistImage, 1000, 500, 200, 200);
        ctx.drawImage(legImage, 1250, 500, 200, 200);
        ctx.drawImage(talismanImage, 1500, 500, 200, 200);

        const buffer = canvas.toBuffer();
        const attachment = new AttachmentBuilder(buffer, "MHTH.png");

        message.reply({
          content: "Optional message content",
          files: [attachment],
        });
      } else {
        console.log("No Armors data or no Rare I Arm found");
      }
    } catch (error) {
      console.error("Error getting documents:", error);
    }
  },
};

// const { AttachmentBuilder } = require("discord.js");
// const { createCanvas, loadImage, registerFont } = require("canvas");
// const {
//   canvasCreate,
//   canvasProfile,
//   canvasLineDesign,
//   canvasText,
//   canvasTextGame,
//   canvasImage,
//   canvasSquare,
// } = require("../utils/functionCard.js");
// const { db } = require("..//firebase/firebase.js");
// const fs = require("fs/promises"); // ใน Node.js version >= 14.0.0
// const path = require("path");

// // อ่านข้อมูลจากไฟล์ JSON
// const readJsonFile = async (filePath) => {
//   try {
//     const jsonData = await fs.readFile(filePath, "utf8");
//     return JSON.parse(jsonData);
//   } catch (error) {
//     console.error(`Error reading JSON file ${filePath}:`, error);
//     return null;
//   }
// };

// // โฟลเดอร์ที่มีไฟล์ JSON หลายๆ ไฟล์
// const folderPath = "models/Hunters/Armors"; // แทนที่ด้วยตำแหน่งที่เก็บไฟล์ของคุณ

// // อ่านข้อมูลจากทุกไฟล์ในโฟลเดอร์
// const readAllJsonFiles = async () => {
//   try {
//     const fileNames = await fs.readdir(folderPath);

//     // ใช้ Promise.all เพื่ออ่านทุกไฟล์แบบ concurrency
//     const fileDataPromises = fileNames.map((fileName) => {
//       const filePath = path.join(folderPath, fileName);
//       return readJsonFile(filePath);
//     });

//     const allFileData = await Promise.all(fileDataPromises);

//     // console.log("Data from all JSON files:", allFileData);
//     return allFileData;
//   } catch (error) {
//     console.error("Error reading JSON files:", error);
//     return null;
//   }
// };

// module.exports = {
//   name: "test",
//   execute: async (message) => {
//     try {
//       const response = [`**เรียน Hunter: ${message.member.displayName}**\n`];

//       // สร้าง Canvas ขนาด
//       const canvasWidth = 2000;
//       const canvasHeight = 1300;

//       const { canvas, ctx } = canvasCreate(
//         canvasWidth,
//         canvasHeight,
//         "#f5cca0",
//       );

//       canvasLineDesign(ctx);

//       //Profile
//       await canvasProfile(message, ctx, canvasWidth);

//       //Text
//       canvasText(
//         ctx,
//         canvasWidth,
//         message.author.displayName,
//         "MHTH III",
//         "1,000,000",
//       );

//       canvasTextGame(ctx);

//       await canvasImage(ctx, 0);
//       await canvasImage(ctx, 1);
//       await canvasImage(ctx, 2);

//       // ตัวอย่างการใช้งาน
//       const jsonDataArray = await readAllJsonFiles();

//       // ตรวจสอบว่าข้อมูลไม่เป็น null และมีข้อมูล
//       if (jsonDataArray && jsonDataArray.length > 0) {
//         await canvasSquare(ctx, jsonDataArray[0]["Rare I"],0);
//         await canvasSquare(ctx, jsonDataArray[0]["Rare II"],1);
//         await canvasSquare(ctx, jsonDataArray[1]["Rare I"],2);
//         await canvasSquare(ctx, jsonDataArray[2]["Rare III"],3);
//         await canvasSquare(ctx, jsonDataArray[3]["Rare I"],4);
//         await canvasSquare(ctx, jsonDataArray[4]["Rare II"],5);
//       } else {
//         console.log("No JSON data available or an error occurred.");
//       }

//       // สร้างรูป MessageAttachment จาก Canvas
//       const buffer = canvas.toBuffer();
//       const attachment = new AttachmentBuilder(buffer, { name: "MHTH.png" });

//       message.reply({
//         content: response.join("\n"),
//         files: [attachment],
//       });
//     } catch (error) {
//       console.error("เกิดข้อผิดพลาดในการดึงสมาชิก:", error);
//     }
//   },
// };
