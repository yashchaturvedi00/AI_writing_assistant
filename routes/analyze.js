const express = require("express");
const axios = require("axios");
const analyzeRoute = express.Router();

analyzeRoute.post('/', async(req,res) => {
    const { sentence } = req.body;
    try {
        const response = await axios.post("https://api.openai.com/v1/chat/completions", 
        {
          model: "gpt=4o-mini",
          messages: [ 
            {
                role: "system",
                content: "You are a assistant that rephrases text. Kindly return the restructured sentences without any context",
            },
            {
                role: "user",
                content: sentence,
            }
              
          ] , 
          max_tokens: 150,
          n: 3,
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
    console.log(response.data.choices);
    const rephraseSentences = response.data.choices.map((choice) => choice.message.content);
    res.status(200).json(rephraseSentences || []);
    } catch (error) {
      console.log(error);
      res.status(500).json({error: error.message });
    }
});    
    

//export
module.exports = analyzeRoute
