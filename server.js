const api = require("./api");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

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
    return res.status(200).send({
      cep: data.cep,
      logradouro: data.logradouro,
      localidade: data.localidade,
      uf: data.uf,
    });
  } catch (error) {
    res.status(406).send({ mensagem: "Digite um CEP válido!" });
  }
});

// Porta

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`app running at http://localhost:${port}`);
});
