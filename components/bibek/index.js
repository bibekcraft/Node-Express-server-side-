const fs =require("fs")
fs.appendFileSync("bio.text","i am a new coder")
// fs.appendFileSync("bio.text","and i am also a student")
// fs.appendFileSync("bio.text","and i am also a freelancer")

// fs.rename("bibek/bio.text","bibek/mybio.text")

//without this utf8 =it shows buffere data which look like this {<Buffer 6d 79 20 6e 61 6d 65 20 69 73 20 62 69 
// 62 65 6b 20 70 61 6e 64
//  65 79 20 69 20 61 6d 20 61 20 6e 65 77 20 63 6f 64 65 72 61 6e 64 20 69 20 61 6d 20 61 ... 13 more bytes>}
//with utf8 => it help to show the data that is actually there 

// const data=fs.readFileSync("bio.text","utf8")   
// console.log(data)   

fs.renameSync("bio.text","mybio.text")
console.log("File renamed successfully!");

// fs.unlinkSync("mybio.text")