let express = require("express");
let bodyParser = require("body-parser");

const server = express();

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


server.listen((process.env.PORT || 8000), () => {
    console.log("Server is up and running...");
});