var fs=require("fs")
fs.writeFileSync("user.txt","Hello")
fs.appendFileSync("user.txt","\nwrold")

let data=fs.readFileSync("user.txt","UTF8")
console.log(data)

let data1=fs.readFileSync("user.txt")
console.log(data1.toString())

var fs=require("fs")
fs.renameSync("user.txt","user2.txt")

var fs=require("fs")
fs.copyFileSync("user2.txt","user3.txt")

var fs=require("fs")
fs.writeFileSync("user.txt","")

//fs.mkdirSync("fsd")
//fs.writeFileSync("fsd/p12.html","<h1>hello</h1>")

//fs.rmdirSync("fsd")

