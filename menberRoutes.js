const express = require("express");
const Member = require("../models/memberModel");

const router = express.Router();

// Add a new member
router.post("/", async (req, res) => {
  try {
    const member = new Member(req.body);
    await member.save();
    res.status(201).json(member);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all members
router.get("/", async (req, res) => {
  const members = await Member.find();
  res.json(members);
});

module.exports = router;
