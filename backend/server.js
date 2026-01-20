const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());



const API_KEY = '37ae9866';

app.get("/api/movies", async (req, res) => {
  const search = req.query.search;

  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
