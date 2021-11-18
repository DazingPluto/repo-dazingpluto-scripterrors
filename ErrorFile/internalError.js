
    function loopOne(x) {
        if (x >= 10) // "x >= 10" is the exit condition
          return;
        // do stuff
        loopOne(x + 1); // the recursive call
      }
      loopOne(0);
function loopTwo(x) {
        if (x >= 1000000000000)
          return;
        // do stuff
        loopTwo(x + 1);
      }
      loopTwo(0);

module.exports={
    loopOne,
    loopTwo
}