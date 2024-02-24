require('dotenv').config();
const { AttachmentBuilder } = require("discord.js");
const { db } = require(process.env.FIREBASE_PATH);
const { getCategory, createCustomCanvas, setEquipment } = require('../utils/functionHunterinfo');

module.exports = {
  name: "test",
  execute: async (message) => {
    // ตรวจสอบว่าผู้ใช้ที่ส่งข้อความมาเป็นผู้ใช้จริงหรือไม่
    if (!message.author) return;

    // ดึง UID (User ID) ของผู้ใช้
    const uid = message.author.id;

    const user = await db.collection("hunters").doc(uid).get();
    const category = await db.collection("category").doc("equipment").get();

    try {
      let userExists = false;
      let newUser;

      if (!user.exists) {
        await db.collection("hunters").doc(uid).set({
          weapon: 1,
          equipment: [0, 0, 0, 0, 0, 0],
          decorations: [0, 0, 0, 0, 0, 0],
          element: 0
        });

        newUser = await db.collection("hunters").doc(uid).get();
      } else {
        userExists = true;
      }

      const { canvas, ctx } = createCustomCanvas("#f5cca0");

      const result = getCategory(userExists ? user.data() : newUser.data(), category.data());

      await setEquipment(canvas, ctx, 200, "#B4B4B8", result);

      message.reply({
        content: `**เรียน Hunter: ${message.member.displayName}**\nนี้คือข้อมูลของท่านค่ะ`,
        files: [new AttachmentBuilder(canvas.toBuffer(), "MHTH.png")],
      });

    } catch (error) {
      console.error(error);
      message.reply(
        `**เกิดปัญหานิดหน่อย** รอคุณโจรดูให้ตอนนี้ตบมังกรดำอยู่ค่ะ`,
      );
    }
  },
};