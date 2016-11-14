//自作モジュール呼び出し
var filter = require("./filter.js");
var dir = process.argv[2];
var fileEx = process.argv[3];

filter(dir, fileEx, function(err, list) {
  if(err) throw err;
  list.forEach(function(file) {
    console.log(file);
  });
});
