const express = require("express");
const router = express.Router();
const fetch = require("node-fetch"); // npm install node-fetch
require("dotenv").config();

router.post("/chat", async (req, res) => {
    const message = req.body.message;

    const systemPrompt = `
    You are RoomSync's smart assistant. RoomSync is a roommate-finder web app that helps users find suitable roommates based on preferences like budget, city, college, etc. 
    You can help users with questions like: 
    - How do I register?
    - How does the AI matching work?
    - Can I chat with other roommates?
    - Is there a verification process?
  `;

    const finalPrompt = `${systemPrompt}\n\nUser: ${message}\nAssistant:`;

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`
            },
            body: JSON.stringify({
                model: "openai/gpt-3.5-turbo", // or whichever model you're using
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: userMessage }
                ]
            })
        });

        const data = await response.json();
        const reply = data?.choices?.[0]?.message?.content || "No reply.";
        res.json({ reply });
    } catch (error) {
        console.error("Chatbot Error:", error);
        res.json({ reply: "Sorry, RoomSync bot is currently unavailable." });
    }
});

module.exports = router;
