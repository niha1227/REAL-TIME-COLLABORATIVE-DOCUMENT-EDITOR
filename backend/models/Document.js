const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, default: "" },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    collaborators: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    versions: [{ content: String, timestamp: Date }]
}, { timestamps: true });

module.exports = mongoose.model("Document", DocumentSchema);
