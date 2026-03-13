var fs=require("fs")
fs.writeFile("a.txt","hello",(err)=>{
    if(err) throw err
    console.log("written in file successfully")
})

var fs=require("fs")
fs.appendFile("a.txt","world",(err)=>{
    if(err) throw err
    console.log("written in file successfully")
})
