var numbers=[-30, 14, 66, 21, 72, -4];
var results = [];


function newNumbers(number) {
  var that = this;
    
  this.number = numbers[i];
  
  this.ele = document.createElement("div");
  this.numberEle = document.createElement("a");
  this.messageEle = document.createElement("a");
  
  this.numberEle.innerHTML = "The number is " + this.number;
  
  if (this.number < 0) {
    this.messageEle.innerHTML += " and the number below 0";
  }
  else if (this.number > 50) {
    this.messageEle.innerHTML += " and the number is greater than 50";
  }
  else if (this.number === 14) {
    this.messageEle.innerHTML += " and the number equals 14";
  }
 
  this.numberEle.addEventListener("click", function(){
    that.increaseNumber();    
    })
  
  
  this.ele.appendChild(this.numberEle);
  this.ele.appendChild(this.messageEle);
  document.body.appendChild(this.ele);  
}
newNumbers.prototype.increaseNumber = function(){
  this.number = this.number + 1;  
  this.numberEle.innerHTML = "The number is " + this.number;

}
for (var i = 0; i < numbers.length; i++) {
  results.push(new newNumbers(numbers[i]))
}