//node js script to create folder named node
//create file name write.txt data is hello
//append sam data to the sem file
//read data from the file display in console 
//remane the file with write 1.txt
//after the delete the folder node
//sync

const fs = require("fs");
const path = require("path");

fs.mkdirSync("node");
console.log('Folder "node" created');

fs.writeFileSync("node/write.txt", "hello");
console.log('File "write.txt" created with data');

fs.appendFileSync("node/write.txt", "hello");
console.log('Data appended to "write.txt"');

const data = fs.readFileSync("node/write.txt", "utf8");
console.log("Data from file:", data);

fs.renameSync("node/write.txt", "node/write1.txt");
console.log('File renamed to "write1.txt"');

// fs.unlinkSync("node/write1.txt"); 
// fs.rmdirSync("node");             
console.log('Folder "node" deleted');
