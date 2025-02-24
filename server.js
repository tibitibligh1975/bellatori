const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

// Serve static files
app.use(express.static(__dirname));

// Handle all routes by serving index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Add the new /links route with the same response
app.get("/links", (req, res) => {
  res.send("Hello World!"); // same response as root route
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
