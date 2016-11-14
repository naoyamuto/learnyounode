var http = require("http");

var urls = [process.argv[2], process.argv[3], process.argv[4]];
console.log(urls);

function execRequest(idx) {
  var url = urls[idx];
  console.log("executing execRequest()... url:", url);

  http.get(url, function(res) {
    if(res.statusCode == 200) {
      //成功時の処理
      res.on("data", function(data) {
        console.log(data);
      });
    }
    //次のリクエストを呼ぶ
    if(idx + 1 < urls.length) {
      console.log(" execute execRequest() after 1000ms...");

      setTimeout(function() {
            execRequest(idx + 1);
        }, 1000);
    } else {
      return callback();
    }
  });
}

execRequest(0);



// http.get(url1, function(res) {
//   res.setEncoding("utf8");
//
//   //console.log("Got response:" + res.statusCode);
//
//   res.on("data", function(data) {
//     console.log(data);
//   });
// });
//
// http.get(url2, function(res) {
//   res.setEncoding("utf8");
//
//   //console.log("Got response:" + res.statusCode);
//
//   res.on("data", function(data) {
//     console.log(data);
//   });
// });
//
// http.get(url3, function(res) {
//   res.setEncoding("utf8");
//
//   //console.log("Got response:" + res.statusCode);
//
//   res.on("data", function(data) {
//     console.log(data);
//   });
// });
