import express from "express"; 
const app = express(); 
const port = 3000; 

// lesson 203 - HTTP Request

app.get("/", (req, res) => { 
    res.send("<h1> Hello from Dubai </h1>");
})

app.get("/content", (req, res) => { 
    res.send("<h2> This is the Dubai Content Page </h2>")
})

app.get("/about", (req, res) => { 
    res.send("<h3> This is the Dubai about Page </h3>")
})

app.listen(port, () => { 
    console.log(`Server is running on port ${port}.`);
})