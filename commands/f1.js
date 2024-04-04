const path = require('path');
const fs = require("fs");
const { keyQuest } = require('../utils/keyquest');
const { cardSkillArmPoint } = require('../utils/cardskillarmpoint');

module.exports = {
  name: 'f1',
  execute: async (message, command) => {
    const mode = command[1].toLowerCase();
    const search = command.slice(2).join(' ').toLowerCase();

    if (mode == "gh" || mode == "va") {
      return;
    } else if (mode == "skillarmor") {
      const filePathSearchskillarmor = path.join(__dirname, '../models/datasearchskillarmor.json');
      const filePathSkillarmor = path.join(__dirname, '../models/dataskillarmor.json');

      try {
        const rawdataSearchskillarmor = await fs.promises.readFile(filePathSearchskillarmor, 'utf-8');
        const convertJsonSearchskillarmor = JSON.parse(rawdataSearchskillarmor);
        const searchSkilArmor = convertJsonSearchskillarmor.searchSkilArmorF1;

        for (const data of searchSkilArmor) {
          if (search === data.name.toLowerCase()) {
            const rawdataSkillarmor = await fs.promises.readFile(filePathSkillarmor, 'utf-8');
            const convertJsonSkillarmor = JSON.parse(rawdataSkillarmor);
            const skilArmor = convertJsonSkillarmor.skilArmorF1;
            return await cardSkillArmPoint(message, data.value, skilArmor);
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
}