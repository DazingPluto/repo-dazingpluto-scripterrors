//const myErrorFile = require('./ErrorFile/error1')

//console.log(myErrorFile);

//const myRangeError = require('./ErrorFile/range-error')

//console.log(myRangeError);

//myRangeError.check(300);

//myRangeError.checkValue("apple", "banana", "carrot");

//const refEr = require ('./ErrorFile/referenceError');

//refEr.tryFunction();

//console.log(refEr.tryFunction);

//const tryHard = require ('./ErrorFile/syntax');
//console.log(tryHard.tryHarder);
//tryHard.tryHarder();

const tryTry = require ('./ErrorFile/typeError');
tryTry.tryTry();
console.log(tryTry.tryTry);

//const tryGain = require ('./ErrorFile/uiError');
//tryGain.tryAgain();
//console.log(tryGain.tryAgain);

//const aggError = require ('./ErrorFile/aggError');
//aggError.aggError();
//console.log(aggError.aggError);

const internalErr = require ('./ErrorFile/internalError');
internalErr.loopOne();
console.log(internalErr.loopOne());


