
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello! My first API is working!");
});

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Headphones", price: 150 },
    { id: 4, name: "Smartwatch", price: 350 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

