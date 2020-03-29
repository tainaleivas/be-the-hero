const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');
const app = express();

app.use(cors());
app.use(express.json());  // declarar para que o json passe a ser entendido pela aplicação
app.use(routes);
app.use(errors());

module.exports = app;