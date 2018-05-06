let express = require("express");
let bodyParser = require("body-parser");
let http = require('http');

const server = express();
server.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
server.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

server.use(bodyParser.urlencoded({
    extended: true
}));

server.use(bodyParser.json());

server.get('/', (req, res) => {
    return res.json({
        mesage: 'hello world'
    });
})

server.post('/getmovements', (req, res) => {

    const val = Math.floor(Math.random() * 1000);
    let account = req.body.queryResult.parameters.account;
    let user = req.body.queryResult.parameters.user;
    return res.json({
        fulfillmentText: `Tu saldo es ${val}`,
        source: 'getmovements'
    });

});


http.createServer(server).listen(server.get('port'), server.get('ip'), function(){
    console.log('Express server listening on port ' + server.get('port'));
});