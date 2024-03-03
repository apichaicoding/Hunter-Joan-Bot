require("dotenv").config();
const { AttachmentBuilder } = require("discord.js");
const { db } = require(process.env.FIREBASE_PATH);
const {
  createCustomCanvas,
  getCategorys,
  setWeapon,
  setElements,
  setEquipment,
  setDecorations,
} = require("../utils/functionHunterinfo");

module.exports = {
  name: "test",
  execute: async (message) => {
    // ตรวจสอบว่าผู้ใช้ที่ส่งข้อความมาเป็นผู้ใช้จริงหรือไม่
    if (!message.author) return;

    // ดึง UID (User ID) ของผู้ใช้
    const uid = message.author.id;

    const getUser = await db.collection("hunters").doc(uid).get();
    const getWeapon = await db.collection("category").doc("weapon").get();
    const getElements = await db.collection("category").doc("elements").get();
    const getEquipment = await db.collection("category").doc("equipment").get();
    const getDecorations = await db.collection("category").doc("decorations").get();

    try {
      let userExists = false;
      let getUserNew;

      if (!getUser.exists) {
        await db
          .collection("hunters")
          .doc(uid)
          .set({
            weapon: ["greatswords", 1],
            namedecorations: [
              "slot1",
              "slot1",
              "slot1",
              "slot1",
              "slot1",
              "slot1",
            ],
            equipment: [0, 0, 0, 0, 0, 0],
            decorations: [0, 0, 0, 0, 0, 0],
            element: "",
          });
        getUserNew = await db.collection("hunters").doc(uid).get();
      } else {
        userExists = true;
      }

      const { canvas, ctx } = createCustomCanvas("#f5cca0");

      const { dataWeapon, dataElements, dataEquipment, dataDecorations } =
        getCategorys(
          userExists ? getUser.data() : getUserNew.data(),
          getWeapon.data(),
          getElements.data(),
          getEquipment.data(),
          getDecorations.data()
        );

      await setWeapon(canvas, ctx, "#B4B4B8", dataWeapon);
      
      await setElements(canvas, ctx, "#B4B4B8", dataElements);

      await setEquipment(canvas, ctx, "#B4B4B8", dataEquipment);

      await setDecorations(canvas, ctx, "#B4B4B8", dataDecorations);

      message.reply({
        content: `**เรียน Hunter: ${message.member.displayName}**\nนี้คือข้อมูลของท่านค่ะ`,
        files: [new AttachmentBuilder(canvas.toBuffer(), "MHTH.png")],
      });
    } catch (error) {
      console.error(error);
      message.reply(
        `**เกิดปัญหานิดหน่อย**\nรอคุณโจรดูให้ตอนนี้ตบมังกรดำอยู่ค่ะ`
      );
    }
  },
};
