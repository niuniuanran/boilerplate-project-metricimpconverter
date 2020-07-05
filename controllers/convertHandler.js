/*
*
*
*       Complete the handler logic below
*       
*       
*/
const impUnits = ['gal', 'mi', 'lbs'];
const metUnits = ['l', 'km', 'kg'];
const unitSpells = {
    'gal': 'gallons',
    'l': 'liters',
    'km': 'kilometers',
    'mi': 'miles',
    'kg': 'kilograms',
    'lbs': 'pounds'
};

const numRegExp = /^[\d./]+/gi;
const letterRegExp = /[a-z]+$/gi;

function ConvertHandler() {
    this.getNum = function (input) {
        const numString = (input.match(numRegExp) || [""])[0];
        if (!numString) return 1;
        const fracEles = numString.split("/");
        if (fracEles.length > 2) return null;
        if (fracEles.length === 2) {
            const numerator = Number(fracEles[0]);
            const denominator = Number(fracEles[1]);
            return numerator && denominator && numerator / denominator || null;
        }
        if (fracEles.length === 1)
            return Number(fracEles[0]) || null;
    };

    this.getUnit = function (input) {
        const unitString = (input.match(letterRegExp) || [""])[0];
        if (!unitString) return null;
        if (impUnits.includes(unitString.toLowerCase())) return unitString;
        if (metUnits.includes(unitString.toLowerCase())) return unitString;
        return null;
    };

    this.getReturnUnit = function (initUnit) {
        initUnit = initUnit.toLowerCase();
        const impIndex = impUnits.findIndex((ele) => ele === initUnit);
        if (impIndex >= 0) return metUnits[impIndex];
        const metIndex = metUnits.findIndex((ele) => ele === initUnit);
        if (metIndex >= 0) return impUnits[metIndex];
        throw new Error("Invalid unit given to getReturnUnit!");
    };

    this.spellOutUnit = function (unit) {
        return unitSpells[unit.toLowerCase()];
    };

    this.convert = function (initNum, initUnit) {
        const galToL = 3.78541;
        const lbsToKg = 0.453592;
        const miToKm = 1.60934;
        initUnit = initUnit.toLowerCase();
        switch (initUnit) {
            case 'gal':
                return galToL * initNum;
            case 'l':
                return initNum / galToL;
            case 'km':
                return initNum / miToKm;
            case 'mi':
                return initNum * miToKm;
            case 'lbs':
                return initNum * lbsToKg;
            case 'kg':
                return initNum / lbsToKg;
            default:
                throw new Error("invalid unit");
        }
    };

    this.getString = function (initNum, initUnit, returnNum, returnUnit) {
        return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    };

}

module.exports = ConvertHandler;
