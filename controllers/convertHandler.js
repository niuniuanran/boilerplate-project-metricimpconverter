/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    const regExp = /^[\d./]*/g;
    const matchResult = input.match(regExp);
    if(!matchResult) return 1;
    const numString = matchResult[0];
    if(!numString) return 1;
    const fracEles = numString.split("/");
    if(fracEles.length > 2) return null; // This is the only
    if(fracEles.length === 2) {
      const numerator = Number(fracEles[0]);
      const denominator = Number(fracEles[1]);
      return numerator && denominator && numerator/denominator || null;
    }
    if(fracEles.length === 1)
      return Number(fracEles[0])||null;
  };
  
  this.getUnit = function(input) {
    var result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
