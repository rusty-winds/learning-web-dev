let fs = require('fs');
function setTimeoutPromisified(a){
  return new Promise(b => setTimeout(b, a));
}
setTimeoutPromisified(500).then(()=>console.log("half a second has passed"));
//----------------------------------------------------
function fsReadPromisified(a,b){
  return new Promise((resolve,reject)=> fs.readFile(a,b,(err,data)=>{
    if (data){resolve(data)}
    else{reject(err)}
}))}
fsReadPromisified('maps.js','utf-8').then(data=>console.log(data)).catch((err)=>console.error('error reading file:',err));
//in line 8 it is the inherent property of 'c' functional argument that it can be called with an argument 'data' and will resolve to it
//in line 10 for 'then' method we pass only function because function is called when promise is fulfiled and only then it looks for value of data which is not defined in synchronus part of the code
//--------------------------------------------
setTimeoutPromisified(1000).then(()=>{console.log("a second since program started");
setTimeoutPromisified(1000).then(()=>{console.log("another second");
setTimeoutPromisified(1000).then(()=>{console.log("another one");})})})
//promise chaining this can be done with async function using await keyword
async function newFunction(){
   await setTimeoutPromisified(3500);
   console.log("3.5 second since program started");
   await setTimeoutPromisified(3500);
   console.log("3.5 seconds passed");
}
newFunction();
//async await, a syntax wise better approach then promise
