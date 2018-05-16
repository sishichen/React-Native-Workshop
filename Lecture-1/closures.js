function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(() => console.log(i))
  }
  return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();