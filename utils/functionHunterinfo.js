const { createCanvas, loadImage } = require("canvas");

//ตำแหน่ง X 6
positionX6 = [150, 490, 830, 1170, 1510, 1850];

//อ่านข้อมูล
const getCategory = (user, category) => {
  const result = [
    category.heads[user.equipment[0]],
    category.arms[user.equipment[1]],
    category.chests[user.equipment[2]],
    category.waists[user.equipment[3]],
    category.legs[user.equipment[4]],
    category.talismans[user.equipment[5]],
  ];
  return result;
};

//สร้าง canvas
const createCustomCanvas = (backgraund) => {
  const canvas = createCanvas(2000, 1000);
  const ctx = canvas.getContext("2d");

  // กำหนดสีพื้นหลังของ canvas
  ctx.fillStyle = backgraund; // สีพื้นหลัง

  // เติมสีพื้นหลังในทั้ง canvas
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  return { canvas, ctx };
};

//กรอบ
const backgraundCategory = (ctx, length, x, y, backgraund) => {
  // กำหนดขนาดของสี่เหลี่ยม
  const rectWidth = length;
  const rectHeight = length;
  const rectRadius = length / 10; // ความยาวของรัศมีสำหรับมุมโค้ง

  // คำนวณตำแหน่ง X และ Y ของสี่เหลี่ยม
  const rectX = x - rectWidth / 2;
  const rectY = y - rectHeight / 2;

  // กำหนดสีพื้นหลังของสี่เหลี่ยม
  ctx.fillStyle = backgraund; // สีพื้นหลัง

  // วาดสี่เหลี่ยมแบบเต็ม
  ctx.beginPath();
  ctx.moveTo(rectX + rectRadius, rectY);
  ctx.lineTo(rectX + rectWidth - rectRadius, rectY);
  ctx.arcTo(
    rectX + rectWidth,
    rectY,
    rectX + rectWidth,
    rectY + rectRadius,
    rectRadius
  );
  ctx.lineTo(rectX + rectWidth, rectY + rectHeight - rectRadius);
  ctx.arcTo(
    rectX + rectWidth,
    rectY + rectHeight,
    rectX + rectWidth - rectRadius,
    rectY + rectHeight,
    rectRadius
  );
  ctx.lineTo(rectX + rectRadius, rectY + rectHeight);
  ctx.arcTo(
    rectX,
    rectY + rectHeight,
    rectX,
    rectY + rectHeight - rectRadius,
    rectRadius
  );
  ctx.lineTo(rectX, rectY + rectRadius);
  ctx.arcTo(rectX, rectY, rectX + rectRadius, rectY, rectRadius);
  ctx.closePath();
  ctx.fill();

  // กำหนดคุณสมบัติของเงา
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)"; // สีของเงา (rgba)
  ctx.shadowBlur = 10; // ความคมของเงา
  ctx.shadowOffsetX = 5; // การเยื้องแนวนอนของเงา
  ctx.shadowOffsetY = 5; // การเยื้องแนวตั้งของเงา

  // กำหนดสีขอบของสี่เหลี่ยม
  ctx.strokeStyle = "#000000"; // สีขอบ
  ctx.lineWidth = 2; // ขนาดเส้นขอบ

  // วาดขอบสี่เหลี่ยม
  ctx.stroke();
};

//รูป
const imageCategory = async (ctx, length, x, y, imageurl) => {
  // โหลดรูปภาพ
  const image = await loadImage(imageurl); // เปลี่ยน path/to/your/image.png เป็นที่อยู่ของรูปภาพของคุณ

  // คำนวณขนาดของรูปภาพเพื่อให้มีความยาว 200 พิกเซล โดยรักษาอัตราส่วนเดิม
  const scaleFactor = (length - 10) / Math.max(image.width, image.height);
  const scaledWidth = image.width * scaleFactor;
  const scaledHeight = image.height * scaleFactor;

  // คำนวณตำแหน่ง X และ Y ของรูปภาพเพื่อให้อยู่ตรงกลางของสี่เหลี่ยม
  const imageX = x - scaledWidth / 2;
  const imageY = y - scaledHeight / 2;

  // กำหนดคุณสมบัติของเงา
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)"; // สีของเงา (rgba)
  ctx.shadowBlur = 10; // ความคมของเงา
  ctx.shadowOffsetX = 5; // การเยื้องแนวนอนของเงา
  ctx.shadowOffsetY = 5; // การเยื้องแนวตั้งของเงา

  // วาดรูปภาพลงใน canvas โดยใช้ขนาดที่ปรับเป็นขนาดใหม่
  ctx.drawImage(image, imageX, imageY, scaledWidth, scaledHeight);
};

//รวม
const setEquipment = async (canvas, ctx, length, backgraund, result) => {
  for (let index = 0; index < result.length; index++) {
    backgraundCategory(
      ctx,
      length,
      positionX6[index],
      canvas.height / 2,
      backgraund
    );
    await imageCategory(
      ctx,
      length,
      positionX6[index],
      canvas.height / 2,
      result[index]
    );
  }
};

module.exports = {
  getCategory,
  createCustomCanvas,
  setEquipment,
};
