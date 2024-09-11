function greet(user){
    console.log('Hi '+sal+' '+user.name+' your age is ' +user.age+' '+canVote);
}
let user={
name:'paritosh',
age:26,
gender:'male'
}
if(user.gender=='male'){
 sal='Mr';
}else if (user.gender=="female"){
 sal='Ms';
}else{ sal='Pr';}
if(user.age>18){
  canVote='and you can vote';}
else{canVote='and you cannot vote';}
greet(user);
