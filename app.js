const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const analyzeRoute = require("./routes/analyze");
const grammarcheckRoute = require("./routes/grammarcheck");
const spellcheckRoute = require("./routes/spellcheck");
const PORT = process.env.PORT || 8000;
//https://api.openai.com/v1/chat/completions

//middlewares
app.use(express.json()); //parsing json data
app.use(cors()); //prevent cross origin resource sharing

//Routes
app.use("/api/analyze", analyzeRoute);
app.use("/grammarcheck", require("./routes/grammarcheck"));
app.use("/api/spellcheck", spellcheckRoute);


//start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
