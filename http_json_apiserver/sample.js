var http = require("http");
var request = require("request");
var url = require("url");

var parseUrl = url.parse('/api/parsetime?iso=2013-08-10T12:10:15.474Z', true);
console.log(parseUrl);
var time = new Date(parseUrl.query.iso);

function parsetime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}

function unixtime(time) {
  return { unixtime: time.getTime() }
}


console.log(parsetime(time));
console.log(unixtime(time));


var http = require("http");
var bl = require("bl");
var url = process.argv[2];

http.get(url, function(res) {

  res.pipe(bl(function(err, data) {
    if(err) return console.error(err);
      console.log(data.length);
      console.log(data.toString());
  }));
});
