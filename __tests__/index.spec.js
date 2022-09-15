const request = require("supertest");
const app = require("../server");

describe("Test my app server", () => {
  it("should get main route", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("author");
    expect(res.body).toHaveProperty("route");
  });
  it("should get address information", async () => {
    const res = await request(app).get("/cep/57015040");

    console.log(res);

    expect(res.statusCode).toEqual(200);
    expect(res.charset).toEqual("utf-8");
    expect(res.type).toEqual("application/json");
    expect(res.header).toHaveProperty("access-control-allow-origin");
    expect(res.header).toHaveProperty("content-type");

    expect(res.body).toHaveProperty("cep");
    expect(res.body).toHaveProperty("logradouro");
    expect(res.body).toHaveProperty("localidade");
    expect(res.body).toHaveProperty("uf");
  });
  it("should be a valida zip code", async () => {
    const res = await request(app).get("/cep/12345678");

    expect(res.statusCode).toEqual(406);
    expect(res.body).toHaveProperty("mensagem");
    expect(res.body.mensagem).toEqual("Digite um CEP válido!");
  });

  it("should be a valid route", async () => {
    const res = await request(app).get("/anything");

    expect(res.redirect).toBe(true);
  });
});
