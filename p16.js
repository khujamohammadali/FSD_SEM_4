// var fs=require("fs")
//  fs.mkdir("fsd1",(err)=>{
//      if(err) throw err
//      console.log("folder created successfully")
//  })

 var fs=require("fs")
 fs.rmdir("fsd1",(err)=>{
     if(err) throw err
     console.log("folder created successfully")
 })
