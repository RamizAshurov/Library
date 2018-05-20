var calculator = {
    currentState: 0,
        read: function() {this.arg = +prompt("argument")},
        sum: function() {return this.currentState += this.arg},
        dif: function() {return this.currentState -= this.arg},
        div: function() {return (this.arg == 0) ? alert("Наноль делить нельзя") : this.currentState /= this.arg},
        mul: function() {return this.currentState *= this.arg},
        getResult: function() {return this.currentState},
        reset: function() {this.currentState = 0}
    };
calculator.read();
alert(calculator.sum());
alert(calculator.dif());
alert(calculator.div());
alert(calculator.mul());
alert(calculator.getResult());
alert(calculator.reset())
