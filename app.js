const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

const mensagens = [];

app.post("/webhook", (req, res) => {
    const { id, mensagem } = req.body;

    if (!id || !mensagem) {
        return res.status(400).json({
            erro: "Os campos id e mensagem são obrigatórios."
        });
    }

    mensagens.push({
        id,
        mensagem
    });

    res.status(201).json({
        sucesso: true,
        mensagem: "Mensagem recebida."
    });
});

app.get("/mensagens", (req, res) => {
    res.json(mensagens);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});