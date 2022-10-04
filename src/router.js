const api = require("./API/api");
const express = require("express");
const router = express.Router();

// Rotas
router.get("/v1", (req, res) => {
  res.status(200).send({
    author: "Maikaodev",
    description:
      "Rota desenvolvida a partir de outro endpoint, cujo o objetivo é reduzir a quantidade de dados para facilitar meu frontend",
    route: "/v1/cep/123456789",
    version: "1.0.0",
  });
});

router.get("/v1/cep/:id", async (req, res) => {
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

// Redirecionamento para rotas inexistentes.

router.all("*", (req, res) => {
  res.redirect("/v1");
});

// Porta
module.exports = router;
