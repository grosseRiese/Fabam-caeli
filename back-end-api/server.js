const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 5000;
const AirBeansRoute = require('./routers/airbeans');
// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
//Route Middlewares
app.use('/api/v1/airbeans', AirBeansRoute);

app.listen(port,()=> {
    console.log(`Listening on port ${port} ...`);
});