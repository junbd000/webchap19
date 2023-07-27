import express from "express";
import path from "path";
const __dirname = path.resolve();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/test", (req, res) => {
  res.send("테스트트");
});

app.listen(port, () => {
  console.log(`서버 실행 (${port})`);
});
