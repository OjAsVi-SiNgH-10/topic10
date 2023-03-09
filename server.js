const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get("*", (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.send("Hello world");
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
