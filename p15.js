var fs=require("fs")
fs.unlink("b.txt",(err)=>{
    if(err) throw err
    console.log("renamed successfully")
})