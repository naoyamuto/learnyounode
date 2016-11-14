var http = require("http");
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var bl = require("bl");
var results = [];
var count = 0;

//resultsの配列に格納した値を出力する関数
function printResults() {
  for (var i = 0; i < results.length; i++) {
    console.log(results[i]);
  }
};

//http.get()する関数
function httpGet(urls, index) {
  http.get(urls[index], function(res) {

    res.pipe(bl(function(err, data) {
      if(err) return console.error(err);
        results[index] = data.toString();
        count = count + 1;
        //全部のgetリクエストがコンソールに出力
        if (count == urls.length) {
          printResults();
        }
    }));
  });
};

//URLの数だけGETリクエストを送信
for(var i = 0; i < urls.length; i++) {
  httpGet(urls, i);
}
