const path = require('path');
const fs = require("fs");
const { cardSkillArmLevel } = require('../utils/cardskillarmlevel');

module.exports = {
  name: 'now',
  execute: async (message, command) => {
    const mode = command[1].toLowerCase();
    const search = command.slice(2).join(' ').toLowerCase();
    
    if (mode == "skillarmor") {
      const filePathSearchskillarmor = path.join(__dirname, '../models/datasearchskillarmor.json');
      const filePathSkillarmor = path.join(__dirname, '../models/dataskillarmor.json');

      try {
        const rawdataSearchskillarmor = await fs.promises.readFile(filePathSearchskillarmor, 'utf-8');
        const convertJsonSearchskillarmor = JSON.parse(rawdataSearchskillarmor);
        const searchSkilArmor = convertJsonSearchskillarmor.searchSkilArmorNow;

        for (const data of searchSkilArmor) {
          if (search === data.name.toLowerCase()) {
            const rawdataSkillarmor = await fs.promises.readFile(filePathSkillarmor, 'utf-8');
            const convertJsonSkillarmor = JSON.parse(rawdataSkillarmor);
            const skilArmor = convertJsonSkillarmor.skilArmorNow;
            return await cardSkillArmLevel(message, data.value, skilArmor);
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
}