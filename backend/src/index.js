const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

//query params 
//route params
//body params

const app = express();

mongoose.connect("mongodb+srv://tccbase:tccbase@cluster0.xbuym.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true,
});

//pp.use(cors({origin:'http://localhost:3000'}));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);



