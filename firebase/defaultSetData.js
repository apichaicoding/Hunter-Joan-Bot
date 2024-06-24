// hunters>uid

// อาวุธ
await db
  .collection("Weapons")
  .doc("Great Swords")
  .set({
    "ดาบใหญ่ เริ่มต้น": {
      Rare: 1,
      Atk: 150,
      Affinity: 0,
      Slot: 0,
      Sharpness: 3,
      Price: 1500,
      Material: {},
    },
    "ดาบใหญ่ กลาง": {
      Rare: 1,
      Atk: 250,
      Affinity: 10,
      Slot: 0,
      Sharpness: 4,
      Price: 25000,
      Material: { "ไม้ เริ่มต้น": 2 },
    },
  });

// วัสดุ
await db
  .collection("Material")
  .doc("Carves")
  .set({
    "เนื้อ เริ่มต้น": {
      Rare: 1,
      Price: 500,
    },
  });

await db
  .collection("Material")
  .doc("Gathering")
  .set({
    "ไม้ เริ่มต้น": {
      Rare: 1,
      Price: 400,
    },
  });

await db
  .collection("Material")
  .doc("Ticket")
  .set({
    "ตั๋ว ระดับ I": {
      Rare: 1,
      Price: 500,
    },
  });

// category>equipment

await db
  .collection("category")
  .doc("equipment")
  .set({
    heads: [
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F1_Heads%2F01_Head_Rare_I.png?alt=media&token=b5ba90ef-3d92-434d-ab3a-b30bc03223eb",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F1_Heads%2F02_Head_Rare_II.png?alt=media&token=dd98d37f-0197-44fe-8096-5bc8bd0d3033",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F1_Heads%2F03_Head_Rare_III.png?alt=media&token=a39389fb-90f6-4540-bdce-edc4d091dde5",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F1_Heads%2F04_Head_Rare_IV.png?alt=media&token=91101421-388e-48dd-a1eb-eb35462789f3",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F1_Heads%2F05_Head_Rare_V.png?alt=media&token=64b34795-ecde-4a0e-a290-0bf24996d4c3",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F1_Heads%2F06_Head_Rare_VI.png?alt=media&token=3a3c30d7-0607-45a2-9aab-237a75995006",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F1_Heads%2F07_Head_Rare_VII.png?alt=media&token=772c286e-7a5c-414a-8d2b-29a68f7b395c",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F1_Heads%2F08_Head_Rare_VIII.png?alt=media&token=9dea9418-b493-4b3e-a159-80ea10f9d464",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F1_Heads%2F09_Head_Rare_IX.png?alt=media&token=1cf0ef28-7226-42c3-bf0c-49aa6c884162",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F1_Heads%2F10_Head_Rare_X.png?alt=media&token=6a1faa2d-8bfa-4a96-99d9-7a1e3ce5ec7e",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F1_Heads%2F11_Head_Rare_XI.png?alt=media&token=d8b5a532-c632-4640-a0fa-18d688c17437",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F1_Heads%2F12_Head_Rare_XII.png?alt=media&token=50da8b53-596c-45d8-951d-05c97f6bf612",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F1_Heads%2F13_Head_Rare_XIII.png?alt=media&token=529cbd85-711a-49c6-aa1a-e26b1b471258",
    ],
    arms: [
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F2_Arms%2F01_Arms_Rare_I.png?alt=media&token=afb04276-d228-4f27-8e74-907093015986",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F2_Arms%2F02_Arms_Rare_II.png?alt=media&token=b0fae35b-dc90-43b5-83b1-1565d3d8b56d",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F2_Arms%2F03_Arms_Rare_III.png?alt=media&token=94efd2ab-7058-460a-9e1a-cacda2f71b40",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    chests: [
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F3_Chests%2F01_Chest_Rare_I.png?alt=media&token=5650eeea-e6f0-4967-b9f6-61928a057d13",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F3_Chests%2F02_Chest_Rare_II.png?alt=media&token=b6ff50d0-1bea-45ac-899d-5aded31fe101",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F3_Chests%2F03_Chest_Rare_III.png?alt=media&token=37cc6280-60ae-4f2c-812c-19634ea83c87",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    waists: [
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F4_Waists%2F01_Waist_Rare_I.png?alt=media&token=531ab37a-64c1-49a0-91f8-d5fd30d049bd",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F4_Waists%2F02_Waist_Rare_II.png?alt=media&token=52ac68ca-ae18-4219-9bc2-911d290af7a3",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F4_Waists%2F03_Waist_Rare_III.png?alt=media&token=05ee84fa-895c-484e-8087-a0078324ce86",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    legs: [
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F5_Legs%2F01_Legs_Rare_I.png?alt=media&token=1ea924b0-ecec-4562-a8a8-27932099cacf",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F5_Legs%2F02_Legs_Rare_II.png?alt=media&token=95f44d26-96e9-4a2b-b8fa-e175d508efcd",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F5_Legs%2F03_Legs_Rare_III.png?alt=media&token=de4da347-297e-4e9a-aeee-edc3064b598b",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    talismans: [
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F6_Talismans%2F01_Talisman_Rare_I.png?alt=media&token=edb6fdbc-3990-4fb7-b45d-95c43bef6aa9",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F6_Talismans%2F02_Talisman_Rare_II.png?alt=media&token=6ac08a68-7b4b-47d9-9f41-357a019df824",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FArmors%2F6_Talismans%2F03_Talisman_Rare_III.png?alt=media&token=419f6e45-99b5-4b8a-9414-cacf909bee82",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  });

// category>weapon

await db
  .collection("category")
  .doc("weapon")
  .set({
    greatswords: [
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FWeapons%2F01_Great_Swords%2F01_Great_Sword_Rare_I.png?alt=media&token=250ed8d6-adb0-42c5-aebc-9ffef8b7e270",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FWeapons%2F01_Great_Swords%2F02_Great_Sword_Rare_II.png?alt=media&token=a8769f9f-957e-4643-8a00-7dbad5cc8b03",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FWeapons%2F01_Great_Swords%2F03_Great_Sword_Rare_III.png?alt=media&token=35b36a92-45aa-4dff-a52d-21854597803c",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  });

// category>elements

await db.collection("category").doc("elements").set({
  dragon:
    "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FElements%2FDragon.png?alt=media&token=c7ec4e65-db10-4414-b929-b072bedb3fe7",
  fire: "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FElements%2FFire.png?alt=media&token=0335673a-94e0-4882-9842-56f773c5beaa",
  ice: "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FElements%2FIce.png?alt=media&token=c8a68851-b27f-4c97-ad8f-2a00594ed9ac",
  thunder:
    "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FElements%2FThunder.png?alt=media&token=95a0f3dc-c7d4-4ef4-b08f-db766c18b095",
  water:
    "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FElements%2FWater.png?alt=media&token=4b12540a-e1d5-498a-9172-fcd0e4e6c1d0",
});

// category>decorations
await db
  .collection("category")
  .doc("decorations")
  .set({
    slot1: [
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FDecorations%2F1_Slot_Decorations%2F01_01_Slot_Decoration_Rare_I.png?alt=media&token=a76dfe63-a3bd-4029-9b76-3209cdc75c13",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FDecorations%2F1_Slot_Decorations%2F02_01_Slot_Decoration_Rare_II.png?alt=media&token=3b68e4b1-f90c-4cb1-9eeb-d6c35f18ab14",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FDecorations%2F1_Slot_Decorations%2F03_01_Slot_Decoration_Rare_III.png?alt=media&token=d0a160f6-a23e-481c-b7a0-bbfe6ca0ac16",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    slot2: [
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FDecorations%2F2_Slot_Decorations%2F01_02_Slot_Decoration_Rare_I.png?alt=media&token=a49f6547-e8e6-40ee-853f-9af647815de9",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FDecorations%2F2_Slot_Decorations%2F02_02_Slot_Decoration_Rare_II.png?alt=media&token=d4e1c228-9977-452d-9cd7-b0fb218a9090",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FDecorations%2F2_Slot_Decorations%2F03_02_Slot_Decoration_Rare_III.png?alt=media&token=8a5cfe26-8dd9-4b57-8f1f-5c6f9b063a1b",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    slot3: [
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FDecorations%2F3_Slot_Decorations%2F01_03_Slot_Decoration_Rare_I.png?alt=media&token=89396bf5-6aeb-4cfa-9d46-b3f7a70fe959",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FDecorations%2F3_Slot_Decorations%2F02_03_Slot_Decoration_Rare_II.png?alt=media&token=65bf3d1a-2f09-4af6-9b43-191c679a4711",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FDecorations%2F3_Slot_Decorations%2F03_03_Slot_Decoration_Rare_III.png?alt=media&token=1d1526f5-86a7-4891-9da8-09cf93c5785d",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    slot4: [
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FDecorations%2F4_Slot_Decorations%2F01_04_Slot_Decoration_Rare_I.png?alt=media&token=524ee7bb-3af6-44e3-aa32-2b6ab4d18a3c",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FDecorations%2F4_Slot_Decorations%2F02_04_Slot_Decoration_Rare_II.png?alt=media&token=fa20a814-50cf-45cd-a59f-f5cfa9b704e9",
      "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/Hunters%2FDecorations%2F4_Slot_Decorations%2F03_04_Slot_Decoration_Rare_III.png?alt=media&token=1184bbd8-d436-433c-b771-3e71f8c3d741",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  });

// //p3>decorations
// const fieldData = {
//   blue: "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/P3%2FDecorations%2Fdecorations-blue.png?alt=media&token=491f729e-0e35-4463-99b8-e18a4283ed6c",
//   green: "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/P3%2FDecorations%2Fdecorations-green.png?alt=media&token=c9dbc78d-3e05-4368-9b4d-bbaed458ca87",
//   grey: "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/P3%2FDecorations%2Fdecorations-grey.png?alt=media&token=336dcc53-2432-441a-b502-c50810831b13",
//   "light-blue": "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/P3%2FDecorations%2Fdecorations-light-blue.png?alt=media&token=42eba30a-a52c-480c-a018-4181ea9eff21",
//   orange: "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/P3%2FDecorations%2Fdecorations-orange.png?alt=media&token=ec24efa6-9452-4529-9b47-f62e20347288",
//   pink: "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/P3%2FDecorations%2Fdecorations-pink.png?alt=media&token=ef89c2d4-5142-46c4-ac54-f6e9868fe556",
//   purple: "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/P3%2FDecorations%2Fdecorations-purple.png?alt=media&token=82b131c7-88de-48e3-af48-2e00734510a7",
//   red: "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/P3%2FDecorations%2Fdecorations-red.png?alt=media&token=313ffc66-fccc-4548-89de-8808d06ce04c",
//   white: "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/P3%2FDecorations%2Fdecorations-white.png?alt=media&token=b5e9f3ab-cbf9-4995-8fc4-3c06b485bdf7",
//   yellow: "https://firebasestorage.googleapis.com/v0/b/discordbothunterjaon.appspot.com/o/P3%2FDecorations%2Fdecorations-yellow.png?alt=media&token=06468817-e798-4f35-a1f6-0156e2284b2b",
// };

// const filePathSearchskillarmor = path.join(__dirname, '../models/datasearchskillarmor.json');
// const filePathSkillarmor = path.join(__dirname, '../models/dataskillarmor.json');

// const rawdataSearchskillarmor = await fs.promises.readFile(filePathSearchskillarmor, 'utf-8');
// const convertJsonSearchskillarmor = JSON.parse(rawdataSearchskillarmor);
// const searchSkilArmor = convertJsonSearchskillarmor.searchSkilArmorP3;

// const rawdataSkillarmor = await fs.promises.readFile(filePathSkillarmor, 'utf-8');
// const convertJsonSkillarmor = JSON.parse(rawdataSkillarmor);
// const skilArmor = convertJsonSkillarmor.skilArmorP3;

// // กำหนดชื่อคอลเลกชันและเอกสารที่ต้องการบันทึก
// const collectionName = 'p3';
// const skillArmorDoc = 'skillarmor';
// const searchSkillArmorDoc = 'search-skillarmor';

// // ข้อมูลที่ต้องการบันทึกลงใน Firestore
// let count = 0;
// for (const data of skilArmor) {
//   const skillArmorData = {};
//   const skills = [];

//   for (let i = 0; i < data.skill_name.length; i++) {
//     skills.push({ name: data.skill_name[i], description: data.skill_desc[i], score: data.skill_point[i] });
//   }

//   const fieldName = data.name.toLowerCase().replace(/[\/.]/g, '-');
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

// console.log(`บันทึกข้อมูลเรียบร้อยแล้ว`);

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