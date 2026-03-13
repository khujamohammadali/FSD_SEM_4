var fs=require("fs")
fs.writeFile("a.txt","hello",(err)=>{
    if(err) throw err
    console.log("written in file successfully")
})