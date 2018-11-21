var express = require('express');  
var request = require('request');
var app = express();  
var cors = require('cors')
var apiServerHost = "http://localhost:8732";
app.use(cors())
app.use('/', function(req, res) {  
	if (req.url.indexOf('/monitor') === 0) res.status(404).send('Not available');
	if (req.url.indexOf('/network') === 0) res.status(404).send('Not available');
	var url = apiServerHost + req.url;
	req.pipe(request(url)).pipe(res);
});
app.listen(process.env.PORT || 3000, function () {
  console.log('TZProxy running')
})  