const express = require("express");
const grammarcheck = express.Router();
const axios = require("axios");

grammarcheck.post('/', async(req,res) => {
    const {text} = req.body;
    
        try {
                const response = await axios.post("https://api.openai.com/v1/chat/completions", 
                {
                  model: "gpt=4o-mini",
                  messages: [ 
                    {
                        role: "system",
                        content: "You are a assistant that corrects grammar errors. Kindly return the corrected text without any context or context",
                    },
                    {
                        role: "user",
                        content: text,
                    }
                      
                  ] , 
                  max_tokens: 150,
                  n: 1,
                  stop: null,
                  temperature: 0.7,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                  },
                }
            );
            const correctedText = response.data.choices[0].message.content; 
            res.status(200).json(correctedText || []);
            } catch (error) {
              console.log(error);
              res.status(500).json({error: error.message });
            }
        });    

//export
module.exports = grammarcheck