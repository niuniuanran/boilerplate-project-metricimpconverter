/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

    var convertHandler = new ConvertHandler();

    app.route('/api/convert')
        .get(function (req, res) {
            var input = req.query.input;
            var initNum = convertHandler.getNum(input);
            var initUnit = convertHandler.getUnit(input);
            if (!initNum || !initUnit) {
                res.status(400);
                const errorMessage = initNum ? "invalid unit" : (initUnit ? "invalid number" : "invalid number and unit")
                res.json({"err": errorMessage})
            }
            var returnNum = convertHandler.convert(initNum, initUnit);
            var returnUnit = convertHandler.getReturnUnit(initUnit);
            var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
            //{initNum: 3.1, initUnit: 'mi', returnNum: 5.0000008, returnUnit: 'km', string: '3.1 miles converts to 5.00002 kilometers'}
            res.json({
                initNum: initNum,
                initUnit: initUnit,
                returnNum: returnNum,
                returnUnit: returnUnit,
                string: toString
            });
        });

};
