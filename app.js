var express = require('express');
    app = express();
    //db = require('mongoskin').db('localhost:27017/foo');

app.set('view engine', 'jade');


//db.collection('wine_inventory').insert({name: 'Welcome To Grapepoint Wines'});

app.get('/', function(req, res) {
    res.render('index', {title: 'Grapepoint Wines'});
});

app.get('/wines', function(req, res) {
    res.render('wines', {title: 'Grapepoint Wines'});
});

var server = app.listen(3000, function() {
    var host = server.address().address;
        port = server.address().port;
    console.log('Grapepoint Wines app listening on port 3000');
});