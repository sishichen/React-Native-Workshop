// IIFE
(function(name) {
  console.log('hi');
}());

function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(
      (function(j) {
        return () => console.log(j)
      }(i))
    )
  }
  return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();