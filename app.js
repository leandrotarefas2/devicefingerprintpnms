const { v4: uuidv4 } = require('uuid');

const express = require('express');
const app = express();
const port = 3000;

// Define EJS como engine de visualização
app.set('view engine', 'ejs');

// Arquivos estáticos (CSS, imagens etc.)
app.use(express.static('public'));

// Rota principal
app.get('/', (req, res) => {
    const deviceId = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"+uuidv4();
    res.render('index', { deviceId });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
