var fs=require("fs")
fs.copyFile("a.txt","b.txt",(err)=>{
    if(err) throw err
    console.log("renamed successfully")
})

