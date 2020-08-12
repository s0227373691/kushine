const express = require("express");

const app = express();

app.get("/", (req, res) => {
  app.use("/dist", express.static("./dist"));
  res.sendFile(__dirname + "/index.html", (err) => {
    if (err) res.sendStatus(404);
  });
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
