var express = require('express'),
    app = express(),

    port = 8090;

app.use(express.static(__dirname + '\\..\\www'));

app.listen(port, function () {
    console.log('Server started...');
});

