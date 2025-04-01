const { v4: uuidv4 } = require('uuid');

const express = require('express');
const app = express();
const port = 3000;

// Define EJS como engine de visualização
app.set('view engine', 'ejs');

// Arquivos estáticos (CSS, imagens etc.)
app.use(express.static('public'));

app.use(express.json()); // para JSON
app.use(express.urlencoded({ extended: true })); // para formulários URL-encoded

// Rota principal
app.get('/', (req, res) => {
    const deviceId = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"+uuidv4();
    res.render('index', { deviceId, country:"AR" });
});

app.post('/', (req, res) => {
    const { country } = req.body;
    const deviceId = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"+uuidv4();
    res.render('index', { deviceId, country });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
