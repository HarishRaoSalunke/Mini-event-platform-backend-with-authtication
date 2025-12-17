const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  createEvent,
  getEvents,
  rsvpEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

// Create event
router.post("/", protect, createEvent);

// Get all events
router.get("/", protect,getEvents);

// RSVP event
router.post("/:id/rsvp", protect, rsvpEvent);

// Update event (creator only)
router.put("/:id", protect, updateEvent);

// Delete event (creator only)
router.delete("/:id", protect, deleteEvent);

module.exports = router;