require("dotenv").config();
const { db } = require(process.env.FIREBASE_PATH);
const path = require('path');
const fs = require("fs");

module.exports = {
    name: "create",
    execute: async (message) => {
      try {
        // ตรวจสอบว่าผู้ใช้ที่ส่งข้อความมาเป็นผู้ใช้จริงหรือไม่
        if (!message.author) return;

        const filePathSearchskillarmor = path.join(__dirname, '../models/datasearchskillarmor.json');
        const filePathSkillarmor = path.join(__dirname, '../models/dataskillarmor.json');

        const rawdataSearchskillarmor = await fs.promises.readFile(filePathSearchskillarmor, 'utf-8');
        const convertJsonSearchskillarmor = JSON.parse(rawdataSearchskillarmor);
        const searchSkilArmor = convertJsonSearchskillarmor.searchSkilArmorP3;

        const rawdataSkillarmor = await fs.promises.readFile(filePathSkillarmor, 'utf-8');
        const convertJsonSkillarmor = JSON.parse(rawdataSkillarmor);
        const skilArmor = convertJsonSkillarmor.skilArmorP3;

        // กำหนดชื่อคอลเลกชันและเอกสารที่ต้องการบันทึก
        const collectionName = 'p3';
        const skillArmorDoc = 'skillarmor';
        const searchSkillArmorDoc = 'search-skillarmor';
        
        // ข้อมูลที่ต้องการบันทึกลงใน Firestore
        for (const data of skilArmor) {
          const skillArmorData = {};
          const skills = [];
        
          for (let i = 0; i < data.skill_name.length; i++) {
            skills.push({ name: data.skill_name[i], description: data.skill_desc[i], score: data.skill_point[i] });
          }
        
          skillArmorData[`${data.name.toLowerCase()}`] = {
            name: data.name,
            image: "",
            description: "",
            skill: skills,
          };
        
          try {
            await db.collection(collectionName).doc(skillArmorDoc).update(skillArmorData);
            console.log(`บันทึกข้อมูล ${data.name} เรียบร้อยแล้ว`);
          } catch (err) {
            console.error(`เกิดข้อผิดพลาดในการบันทึกข้อมูล ${data.name}: `, err);
          }
        }
        
        console.log(`ข้อมูลทั้งหมด ${skilArmor.length} เสร็จสิ้น`);
      
        // const searchSkillArmorData = {
        //   "attack": "attack",
        //   "attack up (l)": "attack",
        //   "attack up (m)": "attack",
        //   "attack up (s)": "attack",
        //   "attack down (s)": "attack",
        //   "attack down (m)": "attack",
        //   "attack down (l)": "attack",
        // };

        // // บันทึกข้อมูล searchskillarmor
        // const searchSkillArmorRef = db.collection(collectionName).doc(searchSkillArmorDoc);
        // searchSkillArmorRef.update(searchSkillArmorData)
        // .then(() => {
        //   console.log('บันทึกข้อมูล searchskillarmor เรียบร้อยแล้ว');
        // })
        // .catch(err => {
        //   console.error('เกิดข้อผิดพลาดในการบันทึกข้อมูล searchskillarmor:', err);
        // });

      } catch (error) {
        console.error('พบข้อผิดพลาด:', error);
      }
    },
};