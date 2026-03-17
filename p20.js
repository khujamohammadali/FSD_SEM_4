//Path Module
//basename()
//diename()
//extname()
//parse()

var pm=require("path")
var a="D:/lj/abc.html"
console.log(pm.basename(a))
console.log(pm.dirname(a))
console.log(pm.extname(a))
console.log(pm.parse(a))

var pm=require("path")
var a="D:/lJ/abc.html"
var fs=require("fs")

fs.mkdirSync(pm.dirname(a))

if(pm.extname(a)==".txt"){
    fs.writeFileSync(a,"This is a text file")
}
else {
    fs.writeFileSync(a,'<h1 style="color:blue">This is html file</h1>')
}
