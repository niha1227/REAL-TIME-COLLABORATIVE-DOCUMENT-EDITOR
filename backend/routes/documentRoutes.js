const express = require("express");
const Document = require("../models/Document");
const router = express.Router();

// Get a document by ID
router.get("/:id", async (req, res) => {
    try {
        const doc = await Document.findById(req.params.id);
        if (!doc) return res.status(404).json({ error: "Document not found" });
        res.json(doc);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

// Create a new document
router.post("/", async (req, res) => {
    try {
        const newDoc = new Document({ title: req.body.title, owner: req.body.owner });
        await newDoc.save();
        res.status(201).json(newDoc);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
