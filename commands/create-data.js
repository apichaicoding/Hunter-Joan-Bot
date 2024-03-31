require("dotenv").config();
const { db } = require(process.env.FIREBASE_PATH);

module.exports = {
    name: "create-data",
    execute: async (message) => {
      try {
        // ตรวจสอบว่าผู้ใช้ที่ส่งข้อความมาเป็นผู้ใช้จริงหรือไม่
        if (!message.author) return;

        // กำหนดชื่อคอลเลกชันและเอกสารที่ต้องการบันทึก
        const collectionName = 'p3';
        const skillArmorDoc = 'skillarmor';
        const searchSkillArmorDoc = 'search-skillarmor';
        
        // // ข้อมูลที่ต้องการบันทึกลงใน Firestore
        // const skillArmorData = {
        //   health: {
          // name: "Health"
        //   image: "red",
        //   description: "เพิ่ม/ลด แถบพลังชีวิต",
        //   skill: [
        //       { name: "Health +50", description: "เพิ่มเลือด 50 หน่วย", score: "+15" },
        //       { name: "Health +20", description: "เพิ่มเลือด 20 หน่วย", score: "+15" },
        //       { name: "Health -10", description: "ลดเลือด 10 หน่วย", score: "-10" },
        //       { name: "Health -30", description: "ลดเลือด 30 หน่วย", score: "-15" },
        //     ]
        //   }
        // };
      
        const searchSkillArmorData = {
          "health": "health",
          "health +50": "health",
          "health +20": "health",
          "health -10": "health",
          "health -30": "health"
        };

        // // บันทึกข้อมูล skillarmor
        // const skillArmorRef = db.collection(collectionName).doc(skillArmorDoc);
        // skillArmorRef.set(skillArmorData)
        // .then(() => {
        //   console.log('บันทึกข้อมูล skillarmor เรียบร้อยแล้ว');
        // })
        // .catch(err => {
        //   console.error('เกิดข้อผิดพลาดในการบันทึกข้อมูล skillarmor:', err);
        // });

        // บันทึกข้อมูล searchskillarmor
        const searchSkillArmorRef = db.collection(collectionName).doc(searchSkillArmorDoc);
        searchSkillArmorRef.set(searchSkillArmorData)
        .then(() => {
          console.log('บันทึกข้อมูล searchskillarmor เรียบร้อยแล้ว');
        })
        .catch(err => {
          console.error('เกิดข้อผิดพลาดในการบันทึกข้อมูล searchskillarmor:', err);
        });

        // // กำหนดชื่อคอลเลกชันและเอกสารที่ต้องการบันทึก
        // const collectionName = 'p3';
        // const documentName = 'decorations';
        
        // // ข้อมูลที่ต้องการบันทึกลงใน Firestore
        // const fieldData = {
        //     blue: "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/P3%2FDecorations%2Fdecorations-blue.png?alt=media&token=491f729e-0e35-4463-99b8-e18a4283ed6c",
        //     green: "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/P3%2FDecorations%2Fdecorations-green.png?alt=media&token=c9dbc78d-3e05-4368-9b4d-bbaed458ca87",
        //     grey: "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/P3%2FDecorations%2Fdecorations-grey.png?alt=media&token=336dcc53-2432-441a-b502-c50810831b13",
        //     "light-blue": "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/P3%2FDecorations%2Fdecorations-light-blue.png?alt=media&token=42eba30a-a52c-480c-a018-4181ea9eff21",
        //     orange: "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/P3%2FDecorations%2Fdecorations-orange.png?alt=media&token=ec24efa6-9452-4529-9b47-f62e20347288",
        //     pink: "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/P3%2FDecorations%2Fdecorations-pink.png?alt=media&token=ef89c2d4-5142-46c4-ac54-f6e9868fe556",
        //     purple: "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/P3%2FDecorations%2Fdecorations-purple.png?alt=media&token=82b131c7-88de-48e3-af48-2e00734510a7",
        //     red: "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/P3%2FDecorations%2Fdecorations-red.png?alt=media&token=313ffc66-fccc-4548-89de-8808d06ce04c",
        //     white: "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/P3%2FDecorations%2Fdecorations-white.png?alt=media&token=b5e9f3ab-cbf9-4995-8fc4-3c06b485bdf7",
        //     yellow: "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/P3%2FDecorations%2Fdecorations-yellow.png?alt=media&token=06468817-e798-4f35-a1f6-0156e2284b2b",
        // };
      

        // // บันทึกข้อมูล
        // const skillArmorRef = db.collection(collectionName).doc(documentName);
        // skillArmorRef.set(fieldData)
        // .then(() => {
        //   console.log('บันทึกข้อมูลเรียบร้อยแล้ว');
        // })
        // .catch(err => {
        //   console.error('เกิดข้อผิดพลาดในการบันทึกข้อมูล:', err);
        // });

      } catch (error) {
        console.error('พบข้อผิดพลาด:', error);
      }
    },
};