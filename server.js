const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000; // Listening on port 4000 for updates

app.use(express.json());
app.use(cors());

// Unified route to receive change stream updates from all collections
app.post("/updates", (req, res) => {
    const { ns, operationType } = req.body; // Extract collection name & operation type

    console.log("✅ Received Change Stream Update:");
    console.log(`🔹 Collection: ${ns.coll}`);
    console.log(`🔹 Operation: ${operationType}`);
    console.log(JSON.stringify(req.body, null, 2));

    // Send a response to confirm receipt
    res.json({ message: "Update received successfully!" });
});

app.listen(PORT, () => {
    console.log(`🚀 Change Stream Tester is running on http://localhost:${PORT}`);
});
