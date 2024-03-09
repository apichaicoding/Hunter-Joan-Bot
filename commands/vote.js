require("dotenv").config();

module.exports = {
  name: "vote",
  execute: async (message) => {
    // ตรวจสอบว่าผู้ใช้ที่ส่งข้อความมาเป็นผู้ใช้จริงหรือไม่
    if (!message.author) return;

    const channel = message.guild.channels.cache.get(process.env.CHANNEL_FIND_FRIEND);
    if (!channel) return console.error("Invalid channel ID");

    const text = `@everyone
อยากให้ไลฟ์ภาคอะไรกันโหวตได้เลย
จ. - พฤ. เวลา 20:30 - 23:00

1️⃣ => [MHF1] Monster Hunter Freedom 
2️⃣ => [MHFU] Monster Hunter Freedom Unite 
3️⃣ => [MH3P] Monster Hunter 3 Portable
4️⃣ => [MH3U] Monster Hunter 3 Ultimate
5️⃣ => [MHFZ] Monster Hunter Frontier Z
6️⃣ => [MHXX] Monster Hunter Double Cross
7️⃣ => [MHWI] Monster Hunter World Iceborne
8️⃣ => [MHRS] Monster Hunter Rise Sunbreak
`;

    // ส่งข้อความไปยังช่องที่ต้องการ
    const sentMessage = await channel.send(text);

    // เพิ่มรีแอคชั่นในข้อความ
    for (let i = 1; i <= 8; i++) {
      await sentMessage.react(`${i}\uFE0F\u20E3`);
    }
  },
};
