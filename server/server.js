const express = require('express');
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');
const enquiriesController = require('./controllers/enquiriesController')
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../build")))

app.use("/api/enquiries", enquiriesController)

const port = process.env.PORT || 4005
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"))
})