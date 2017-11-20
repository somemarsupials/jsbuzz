describe("FizzBuzz", function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  describe("#fizz", function() {
    it('returns fizz if argument is divisible by 3', function () {
      expect(fizzbuzz.fizz(3)).toEqual('fizz')
    });
    it('it does not fizz if the arg is not divisible by 3', function () {
      expect(fizzbuzz.fizz(4)).toEqual('')
    });

  });

  describe("#buzz", function() {
    it('returns buzz if argument is divisible by 5', function() {
      expect(fizzbuzz.buzz(5)).toEqual('buzz')
    });
    it('does not buzz if the arg is not divisible by 5', function () {
      expect(fizzbuzz.buzz(4)).toEqual('')
    });
  });

  describe("#fizzbuzz", function() {
    it('retrurns fizzbuzz if argument is divisible by both 3 and 5', function(){
      expect(fizzbuzz.fizzbuzz(15)).toEqual('fizzbuzz')
    });
    it('does not fizzbuzz if the arg is not divisible by 3 and 5', function (){
      expect(fizzbuzz.fizzbuzz(14)).toEqual('14')
    });
  });
});
