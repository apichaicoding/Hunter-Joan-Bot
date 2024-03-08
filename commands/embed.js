// require('dotenv').config();
// const { EmbedBuilder } = require('discord.js');

// module.exports = {
//     name: "embed",
//     execute: async (message, value1, value2, value3) => {
//         // ตรวจสอบว่าผู้ใช้ที่ส่งข้อความมาเป็นผู้ใช้จริงหรือไม่
//         if (!message.author) return;

//         const channel = message.guild.channels.cache.get(process.env.CHANNEL_TEST);
//         if (!channel) return console.error('Invalid channel ID');

//         // สร้าง embed
//         const exampleEmbed = new EmbedBuilder()
//             .setColor(0xEB9B34)
//             .setTitle('Live Tiktok')
//             .setURL('https://www.tiktok.com/@valkillerchannel/live?enter_from_merge=share&enter_method=share_copy_link')
//             .addFields(
//                 { name: 'มาล่าแย้กันเถอะ', value: 'เริ่ม 20:30 - 23:00'},
//                 value3 != "" ? { name: 'Session', value: '```value3```' } : null,
//             )
//             .setThumbnail('https://cdn.discordapp.com/attachments/1136706677748531240/1215354184422133880/LOGO_2023.png?ex=65fc71c9&is=65e9fcc9&hm=f28ee0c0f617f4805cc55759c7bc182135d714f55c6465fd26e852edddb18a10&')
        
//             if(value2 != ""){
//                 value2 = value2.replace("/clip", "/Clip");
//                 exampleEmbed.setImage(value2);
//             }

//         // ส่ง embed กลับไปยังผู้ใช้ที่ส่งข้อความมา
//         channel.send({ embeds: [exampleEmbed] });
//     }
// }