const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello from DevOps Demo 🚀");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(3000, () => console.log("Server running"));
