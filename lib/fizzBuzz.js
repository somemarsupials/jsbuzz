function FizzBuzz() {
};

FizzBuzz.prototype.fizz = function(n) {
  return n % 3 == 0 ? 'fizz' : '';
};

FizzBuzz.prototype.buzz = function(n) {
  return n % 5 == 0 ? 'buzz' : '';
};

FizzBuzz.prototype.fizzbuzz = function(n) {
  var string = this.fizz(n) + this.buzz(n);
  return string == '' ? n.toString() : string;
};
