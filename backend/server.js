const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/submit", async (req, res) => {

    const formData = req.body;

    try {

        await axios.post(
            "https://hook.eu1.make.com/yasfnwmahdqgmsxutkknnj0qravtp7k4",
            formData
        );

        res.json({
            message: "Complaint submitted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Something went wrong"
        });

    }

});

app.listen(5001, () => {
    console.log("Server running on port 5001");
});