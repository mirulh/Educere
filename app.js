const http = require('http');

http.createServer(function (req, res) {
res.write("On the way to be a fs");
res.end();


}
).listen(3000);

console.log("Brah, server started on port 3000");
