// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip








import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basePath = "A:\\Self Study\\Projects & Exercise\\JAVA-SCRIPT\\Exercise 15 - Clear the Clutter  Sigma Web Development Course"

let files = await fs.readdir(basePath)
// console.log(files);

for (const items of files) {
    console.log("running for item",items);
    let ext = items.split(".")[1]  // if i do [0] it will give me the file name
    if (ext != "js" && ext != "json" &&  items.split(".").length > 1) {
        if(fsn.existsSync(path.join(basePath, ext))){
            // move to this directory if its not a js or a json file.
            fs.rename(path.join(basePath, items), path.join(basePath, ext, items))
        }else{
            fsn.mkdirSync(ext)
        }
    }
    console.log(ext);
}

console.log("done");













// to learn:




// string's .split() Method
// Purpose: The .split() method splits a string into an array of substrings based on a specified delimiter.
// Syntax:
// javascript
// Copy code
// string.split(separator, limit)
// separator: The character or regular expression that determines where to split the string.
// limit (optional): A number specifying the maximum number of splits.
// Key Points:
// Input: It acts on a string.
// Output: It produces an array of substrings.
// let text = "apple.banana.cherry";
// let parts = text.split("."); // Splits the string at each "."
// console.log(parts); // Output: ["apple", "banana", "cherry"]

// Step-by-Step Explanation:
// items.split("."):

// This splits the string items into an array of substrings wherever a . (dot) appears.
// For example:
// "file.txt" → ["file", "txt"]
// "data.json" → ["data", "json"]
// "no_extension" → ["no_extension"]
// "multiple.dots.in.name.js" → ["multiple", "dots", "in", "name", "js"]
// .length:

// It gets the number of elements in the array produced by .split(".").
// Examples:
// For "file.txt", the array is ["file", "txt"], and .length is 2.
// For "no_extension", the array is ["no_extension"], and .length is 1.
// length > 1:

// This condition ensures that the filename contains at least one dot (.), meaning it has both a base name and an extension.
// Examples:
// "file.txt": length = 2 → true
// "no_extension": length = 1 → false


