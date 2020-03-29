const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://betosimo:baub@cluster0-g4x3t.mongodb.net/omnistackdb?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    });
app.use(cors());
app.use(express.json())
app.use(routes);
//tipos de parametros:
// query params: req.query(filtros ordenação busca)
//route params: req.params (identificar usuario na alteração ou deleção)
//body: req.body (dados paracriação ou alteração de registro)

app.listen(3333);