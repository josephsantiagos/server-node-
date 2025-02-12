const express = require('express');
const app = express();
const port = 3000;

// Converte as requisições em JSON no servidor
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log("Servidor rodando na porta", port);
});

app.post('/user', (req, res) => {
    const { nome, idade, email } = req.body;

    if (!nome || !idade || !email) {
        return res.status(400).json({ message: "Todos os campos (nome, idade, email) são necessários" });
    }

    console.log("Usuário cadastrado", { nome, idade, email });
    res.status(201).json({ message: "Usuário cadastrado com sucesso" });
});
