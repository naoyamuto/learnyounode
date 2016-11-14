var fs = require("fs");
var path = require("path");

module.exports = function(dir, fileEx, callback) {

  fs.readdir(dir, function(err, list) {
    var files = [];
    if(err) return callback(err);
      for(var i in list) {
        if(path.extname(list[i]) == '.' + fileEx) {
          files.push(list[i]);
        }
      }
    callback(null, files);
  });
}
