const api = require("./api");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// Configurando para JSON
app.use(cors("*"));
app.use(bodyParser.json());

// Rotas
app.get("/", (req, res) => {
  res.status(200).send({ author: "Maikaodev", route: "cep/123456789" });
});

app.get("/cep/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const { data } = await api.get(`${id}/json`);
    if (data.erro) {
      throw new Error();
    }
    res.status(200).json({
      cep: data.cep,
      logradouro: data.logradouro,
      localidade: data.localidade,
      uf: data.uf,
    });
  } catch (error) {
    return res.status(406).send({ mensagem: "Digite um CEP válido!" });
  }
});

// Porta
module.exports = app;
