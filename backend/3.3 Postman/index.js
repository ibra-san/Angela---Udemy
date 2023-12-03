import express from "express";
const app = express();
const port = 3000; 

app.listen(port, () => { 
    console.log(`Server is running on port ${port}.`);
})

app.get("/", (req, res) => { 
    res.send("<h1> Home page </h1>");
}); 

app.post("/register", (req, res) => { 
    res.sendStatus(201);
}); 

app.put("/user/ibrahim", (req, res) => { 
    res.sendStatus(200); // instead of this code we will be sending actual code that will do something, 
    // like for example deleting a user or something
}); 

app.patch("/user/ibrahim", (req, res) => { 
    res.sendStatus(200);
}); 

app.delete("/user/ibrahim", (req, res) => { 
    res.sendStatus(200);
}); 

