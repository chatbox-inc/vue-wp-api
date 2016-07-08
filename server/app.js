var express = require('express');
var app = express();
var fs = require("fs");
const createBundleRenderer = require('vue-server-renderer').createBundleRenderer

const renderer = createBundleRenderer(fs.readFileSync(__dirname+'/server-bundle.js'))

app.get("/", (req,res)=>{
    const renderStream = renderer.renderToString((e,result)=>{
        let html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>WP API Sample Application</title>
  <script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
  <script src="./assets/js/common.bundle.js"></script>
</head>
<body>
<div id="app">
  <h1 class="app-title">WP API Sample Application</h1>
  ${result}
</div>
</body>
</html>
        `;
        res.send(html)
    })
})

var server = app.listen(4000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening at http://%s:%s', host, port);
});