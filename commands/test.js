require("dotenv").config();
const { createCanvas, loadImage, registerFont } = require("canvas");
const { AttachmentBuilder } = require("discord.js");

module.exports = {
  name: "test",
  execute: async (message, command) => {

    //Set Font
    registerFont("fonts/Mitr-Bold.ttf", { family: "Mitr-Bold" });

    try {
      // สร้าง Canvas ขนาด
      const canvasWidth = 1920;
      const canvasHeight = 1080;
      const canvas = createCanvas(canvasWidth, canvasHeight);
      const ctx = canvas.getContext("2d");

      // สีพื้นหลัง
      ctx.fillStyle = "#f5cca0";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // ข้อมูลแท่งกราฟ
      const data = [1, 3, 5, 4, 2];
      const barWidth = 200;
      const barSpacing = 50;
      const numberOfBars = data.length;
      const totalBarWidth = numberOfBars * barWidth + (numberOfBars - 1) * barSpacing;
      const startX = (canvasWidth - totalBarWidth) / 2;
      const maxBarHeight = Math.max(...data);
      const scale = (canvasHeight - 100) / maxBarHeight; // ลดจากความสูงทั้งหมดเพื่อให้มีที่ว่าง

      // วาดแท่งกราฟ
      data.forEach((value, index) => {
          const x = startX + (barWidth + barSpacing) * index;
          const y = canvasHeight - value * scale;
          const height = value * scale;

          ctx.fillStyle = "#4CAF50"; // สีแท่งกราฟ
          ctx.fillRect(x, y, barWidth, height);
      });

      // สร้างรูป MessageAttachment จาก Canvas
      const buffer = canvas.toBuffer();
      const attachment = new AttachmentBuilder(buffer, { name: "MHTH.png" });

      // ส่งรูป Canvas ในข้อความ
      message.reply({
        content: `**เรียน ${message.member.displayName}**`,
        files: [attachment]
      });

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

  },
};