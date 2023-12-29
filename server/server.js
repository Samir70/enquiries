const express = require('express');
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 4005
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})