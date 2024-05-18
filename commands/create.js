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

        // ------------------------ search & skil armor ------------------------
        // const filePathSearchskillarmor = path.join(__dirname, '../models/datasearchskillarmor.json');
        // const filePathSkillarmor = path.join(__dirname, '../models/dataskillarmor.json');

        // const rawdataSearchskillarmor = await fs.promises.readFile(filePathSearchskillarmor, 'utf-8');
        // const convertJsonSearchskillarmor = JSON.parse(rawdataSearchskillarmor);
        // const searchSkilArmor = convertJsonSearchskillarmor.searchSkilArmorNow;

        // const rawdataSkillarmor = await fs.promises.readFile(filePathSkillarmor, 'utf-8');
        // const convertJsonSkillarmor = JSON.parse(rawdataSkillarmor);
        // const skilArmor = convertJsonSkillarmor.skilArmorNow;

        // // กำหนดชื่อคอลเลกชันและเอกสารที่ต้องการบันทึก
        // const collectionName = 'now';
        // const skillArmorDoc = 'skillarmor';
        // const searchSkillArmorDoc = 'search-skillarmor';
        // let count = 0;
        
        // // ข้อมูลที่ต้องการบันทึกลงใน Firestore
        // for (const data of skilArmor) {
        //   const skillArmorData = {};
        //   const skills = [];
        
        //   for (let i = 0; i < data.skill_desc.length; i++) {
        //     skills.push({ name: "", description: data.skill_desc[i], score: data.skill_point[i] });
        //   }
        
        //   const fieldName = data.name.toLowerCase().replace(/[*~/\[\].]/g, '-');
        //   skillArmorData[fieldName] = {
        //     name: data.name,
        //     image: "",
        //     description: "",
        //     skill: skills,
        //   };
        
        //   try {
        //     await db.collection(collectionName).doc(skillArmorDoc).update(skillArmorData);
        //     count++;
        //     console.log(`บันทึกลำดับที่ ${count}: ${fieldName}`);
        //   } catch (err) {
        //     console.error(`เกิดข้อผิดพลาดในการบันทึกข้อมูล`, err);
        //   }

        // }

        // try {
        //   const docRef = db.collection(collectionName).doc(skillArmorDoc);
        //   const docSnapshot = await docRef.get();
        
        //   if (docSnapshot.exists) {
        //     const data = docSnapshot.data();
        //     const docCount = Object.keys(data).length;
        //     if (docCount === count) {
        //       console.log(`จำนวนเอกสารใน Firestore (${docCount}) เท่ากับจำนวนที่บันทึก (${count})`);
        //     } else {
        //       console.log(`มีปัญหา! จำนวนเอกสารใน Firestore (${docCount}) ไม่เท่ากับจำนวนที่บันทึก (${count})`);
        //     }
        //   } else {
        //     console.log('ไม่พบเอกสารที่ต้องการ');
        //   }
        // } catch (error) {
        //   console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
        // }
      
        // // บันทึกข้อมูล searchskillarmor
        // for (const data of searchSkilArmor) {
        //   const skillArmorData = {};

        //   const fieldName = data.name.toLowerCase().replace(/[*~/\[\].]/g, '-');
        //   skillArmorData[fieldName] = {
        //     name: fieldName,
        //     value: data.value,
        //   };

        //   try {
        //     await db.collection(collectionName).doc(searchSkillArmorDoc).update(skillArmorData);
        //     count++;
        //     console.log(`บันทึกลำดับที่ ${count}: ${fieldName}`);
        //   } catch (err) {
        //     console.error(`เกิดข้อผิดพลาดในการบันทึกข้อมูล`, err);
        //   }

        // }

        // try {
        //   const docRef = db.collection(collectionName).doc(searchSkillArmorDoc);
        //   const docSnapshot = await docRef.get();
        
        //   if (docSnapshot.exists) {
        //     const data = docSnapshot.data();
        //     console.log(data);
        //     const docCount = Object.keys(data).length;
        //     if (docCount === count) {
        //       console.log(`จำนวนเอกสารใน Firestore (${docCount}) เท่ากับจำนวนที่บันทึก (${count})`);
        //     } else {
        //       console.log(`มีปัญหา! จำนวนเอกสารใน Firestore (${docCount}) ไม่เท่ากับจำนวนที่บันทึก (${count})`);
        //     }
        //   } else {
        //     console.log('ไม่พบเอกสารที่ต้องการ');
        //   }
        // } catch (error) {
        //   console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
        // }

      } catch (error) {
        console.error('พบข้อผิดพลาด:', error);
      }
    },
};