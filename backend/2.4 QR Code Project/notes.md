**Project notes**


***Importing node modules rather than requiring them *** 

- Before using the word import from the JS file, you need to convert node from utilizing "type" of common to utilizing type of "module".
- To achieve the above you will need to go to the package.json file and change "type": "commonJs" -> "type": "module"; 

***Inquirer code*** 

- The package take in the user input by asking them questions. 
- We need to first set the properties of the object. 
- The prompt is the area where the properties of the question are going to be and that includes the expected variable that is going to store the user input


***Running a node file *** 
- In order to run a node file you will need to type: 
    node file_name.js