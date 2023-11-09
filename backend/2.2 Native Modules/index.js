const fs = require("fs"); // this calls FileSystem module 

fs.writeFile("message.txt", "Hello from Node JS 15", (err) => { 
    if(err) throw err; // if there is an error, throw an error 
    console.log("File has been created")
}) 


// The challenge is to read the content of the website and 
fs.readFile("message.txt", "utf-8", (err, data) => { 
    if (err) throw err; 
    console.log(data);
})



