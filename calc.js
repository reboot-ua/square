function calc(num) {
  return {
    answer: num,
    result: function () {
      return console.log("Result: " + this.answer)
    },
    plus: function (b) {
      this.answer += b;
      console.log(num + " + "+ b + " = "+ this.answer );
      return this
    },
    minus: function (c) {
      this.answer -= c;
      console.log(num + " - "+ c + " = "+ this.answer );
      return this
    },
    multiply: function (d) {
      this.answer *= d;
      console.log(num + " * " + d + " = " + this.answer );
      return this
    },
    divide: function (e) {
      this.answer /= e;
      console.log(num + " / " + e + " = " + this.answer );
      return this
    },
  }
}
calc(5).minus(2).multiply(3).minus(1).divide(2).plus(6).result();