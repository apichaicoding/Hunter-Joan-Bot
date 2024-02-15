const express = require("express");

const server = express();
const port = 3000;

server.use(express.json());

server.get("/", (req, res) => {
  res.send("เซิร์ฟเวอร์ MHTH กำลังทำงาน!");
});

server.listen(port, () => {
  console.log(`เซิร์ฟเวอร์ MHTH กำลังทำงานบนพอร์ต ${port}`);
});
