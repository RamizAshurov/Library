function Calculator() {
	this._currentState = 0;
  this.read = function() {this.arg = +prompt("argument")};
  this.sum = function() {return this._currentState += this.arg}
  this.dif = function() {return this._currentState -= this.arg}
  this.div = function() {return (this.arg == 0) ? alert("Наноль делить нельзя") : this._currentState /= this.arg}
  this.mul = function() {return this._currentState *= this.arg}
  this.getResult = function() {return this._currentState}
  this.reset = function() {this._currentState = 0}
}
function ExtendedCalculator() {
	Calculator.call(this);
  this.log = function() {this._currentState = Math.log(this.arg)}
  var parentGetResult = this.getResult();
  this.getResult = function() {
  	var name = prompt("Name?")
    alert(name + " результат равен " + parentGetResult)
  }
  
}
var extendedCalculator = new ExtendedCalculator();
extendedCalculator.read();
extendedCalculator.log();
extendedCalculator.getResult()
