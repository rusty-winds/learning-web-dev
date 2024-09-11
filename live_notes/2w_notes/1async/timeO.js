function todo(){
  console.log("click it");
}
console.log('hey');
setTimeout(todo,1000);//setTimeout is asynch function that is calling timeout after 15 second timer
console.log('wil you ');// 1000 is 1000 ms or 1 second
//web api provide the time out feature and when 1 sec is done it will push  the timeout function to callback queue which will be picked up call stack when it is done doing all that it needs to ie run all operation that are synchronous
