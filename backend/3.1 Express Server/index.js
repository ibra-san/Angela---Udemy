import express from "express"; 
const app = express(); 
const port = 3000; 

// lesson 203 - HTTP Request

app.get("/", (req, res) => { 
    res.send("Hello, World!");
})

app.listen(port, () => { 
    console.log(`Server is running on port ${port}.`);
})