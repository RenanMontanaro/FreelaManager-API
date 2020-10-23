const express = require ('express');
const mongoose = require ('mongoose');

const app = express();

//Conexão com o banco
mongoose.connect('mongodb://localhost:27017/FreelaMN' ,
    { useNewUrlParser: true, useUnifiedTopology: true}
)

app.get('/exercicio', (req, res) => {
    res.send("Minha primeira rota")
})

app.listen(3001);