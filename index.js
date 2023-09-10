const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
});

app.listen(3333, () => console.log('App rodando na porta 3333'))