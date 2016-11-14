
var net = require('net');
var portNum = Number(process.argv[2]);

//日時を取得してゼロパディングする関数
function t() {
  var d = new Date();
  var month = "0" + (d.getMonth() + 1);
  var date = "0" + d.getDate();
  var hour = "0" + d.getHours();
  var minutes = "0" + d.getMinutes();

  var month = month.slice(-2);
  var date = date.slice(-2);
  var hour = hour.slice(-2);
  var minutes = minutes.slice(-2);

  return d.getFullYear() + '-'
    + month + '-'
    + date + ' '
    + hour + ':'
    + minutes
};

console.log("starting server at port " + process.argv[2])

//TCPサーバー起動
var server = net.createServer(function(socket) {
  socket.end(t() + '\n');
});

server.listen(portNum);
