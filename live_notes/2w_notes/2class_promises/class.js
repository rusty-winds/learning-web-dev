class Screen{
  constructor(a,b,c,d){
    this.width = a;
    this.height = b;
    this.tech = c;
    this.cost = d;
  }
  prop(){
    console.log("this is a "+this.width+"px by "+this.height+"px screen that uses "+this.tech+" technology")}
}
const lg = new Screen(2560,1440,"LED","high");
lg.prop();
//-----------------------
const date = new Date();
console.log(date.getFullYear());
//date.getFullYear is a method of date object which was created using Date class which is in-built in js
