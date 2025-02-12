const express = require("express");
const Event = require("../models/Event");

const router = express.Router();

// Create Event
router.post("/", async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.json(event);
    } catch (error) {
        res.status(500).send("Server Error");
    }
});

// Get All Events
router.get("/", async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).send("Server Error");
    }
});

module.exports = router;
