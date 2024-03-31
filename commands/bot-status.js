require("dotenv").config();
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "bot-status",
  execute: async (message, value1, value2) => {
    value2= value2.toLowerCase();

    // ตรวจสอบว่าผู้ใช้ที่ส่งข้อความมาเป็นผู้ใช้จริงหรือไม่
    if (!message.author) return;

    const channel = message.guild.channels.cache.get(process.env.CHANNEL_COMMAND);
    // const channel = message.guild.channels.cache.get(process.env.CHANNEL_TEST);

    if (!channel) return console.error("Invalid channel ID");

    // สร้าง embed
    if (value2 === "open" || value2 === "close") {
      const exampleEmbed = new EmbedBuilder()
        .setColor(0xeb9b34)
        .setTitle( "Janny "+(value2 === "open" ? "Open" : "Close"))
        .setDescription(value2 === "open" ? "ตอนนี้พร้อมให้การช่วยเหลือเหล่าฮันเตอร์แล้วค่ะ" : "ร่างกายต้องการพักผ่อนให้เพียงพอ Janny ขอตัวไปนอนก่อนน่ะ")
        .setImage(value2 === "open" ? 'https://cdn.discordapp.com/attachments/1136706677748531240/1223290145394921502/The-young-woman-with-short-pink-hair-was-sitting-yawning-lazily-amidst-the-sandy-beach--It-was-late-at-night--with-stars-and-shooting-stars-dotting-the-sky--Around-her--there-were-only-dim-lights-and-.jpg?ex=661950ba&is=6606dbba&hm=19d359b37448d3ea57fbd1b657d17b32ee15e51471f4cfbda1df89d2f2c7e438&' : "https://cdn.discordapp.com/attachments/1136706677748531240/1223306987249467624/A-girl-with-short-pink-hair-hugged-a-big-sword--Sleeping-in-the-middle-of-the-desert-at-night-with-a-sky-full-of-stars-displayed-There-is-a-bonfire-and-a-tent-_1.jpg?ex=66196069&is=6606eb69&hm=6477ec3e83f831900653471dc1fae35709c2f8429fe0e143131c176c06568e54&")
  
      // ส่ง embed กลับไปยังผู้ใช้ที่ส่งข้อความมา
      channel.send({ embeds: [exampleEmbed] });
    }
    
  },
};