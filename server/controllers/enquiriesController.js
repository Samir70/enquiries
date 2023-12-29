const enquiries = require('express').Router();
const db = require('../models')
const { Enquiry } = db;

enquiries.get("/", async (req, res) => {
  try {
    const foundEnqs = await Enquiry.findAll()
    res.status(200).json(foundEnqs)
  } catch (err) {
    res.status(500).send("Server error")
    console.log(err)
  }
})

module.exports = enquiries