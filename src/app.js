const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


require('./db')


// define a root route
app.get('/', (req, res) => {
    res.send("Default route..");
});

app.listen(config.node_port, () => {
    console.log(`${config.app_name} listening on port ${config.node_port}`);
    });


//routes
const routes = require('./routes')
app.use('/api/v1', routes)



module.exports = app

