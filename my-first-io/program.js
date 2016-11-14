var fs = require("fs");
var file = fs.readFileSync(process.argv[2]);

//Buffer型をString型に変換後、改行文字で分割
var file2 = file.toString().split("\n").length - 1;

console.log(file2);
