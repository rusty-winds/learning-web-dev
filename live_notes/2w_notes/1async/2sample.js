const fs = require("fs");//importing fs module as fs
function logger(err,a){//function required by fs to run asynchronously
  console.log(a);//we define what we do with data or error 
//  console.log(err);
}
fs.readFile("a.txt","utf-8",logger)//logger gets executed when readfile is done
fs.readFile("b.txt","utf-8",logger)
console.log("done")
