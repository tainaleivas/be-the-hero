const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());  // declarar para que o json passe a ser entendido pela aplicação
app.use(routes);


app.listen(3333);