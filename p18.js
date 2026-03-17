//to write yesy 'creating file' to hepl.txt fileafter thet add data 'new' to sem file
//after thet read the data form file file in console after finshing read oprtion print thank you
//in console write appande read or seqvance must be mentanet
//all this oprtion are all Asyncronace

var fs = require("fs");

fs.writeFile("help.txt", "You are creating a file", (err) => {
    if (err) throw err;
    console.log("Written in file successfully");

    fs.appendFile("help.txt", " new", (err) => {
        if (err) throw err;
        console.log("added in file successfully");
    });

    fs.readFile("help.txt", "UTF-8", (err, data) => {
        if (err) throw err;
        console.log(data);
        console.log("Thank you");
    });
});
