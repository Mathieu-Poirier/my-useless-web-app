const express = require("express");
const app = express();
const port = 3000;

let count = 0;

app.use(express.json());

app.get("/api/count", (req, res) => {
  res.json({ count });
});

app.post("/api/increase", (req, res) => {
  count++;
  res.json({ count });
});

app.post("/api/decrease", (req, res) => {
  count--;
  res.json({ count });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
