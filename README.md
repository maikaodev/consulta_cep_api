## API - Consulta CEP

## Menu

  * [Descrição](#Descrição)
  * [Deploy](#Deploy)
  * [Linkedin](#Linkedin)
  * [Aprendizado](#Aprendizado)
  * [Tecnologias](#Tecnologias)
  * [Pré-requisitos](#Pré-requisitos)
  * [Rodando o Back End](#rodando-o-back-end)


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/).
Além disso é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### Rodando o Back End

```bash
# Clone este repositório
$ git clone https://github.com/maikaodev/_api_consulta_cep.git

# Acesse a pasta do projeto no terminal/cmd
$ cd _api_consulta_cep

# Instalar as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# E o servidor iniciará: - acesse <http://localhost:3000>
```

### Deploy
https://api-consulta-cep.herokuapp.com/

### Linkedin

https://www.linkedin.com/in/maikaodev/

### Descrição

- API criada para desenvolver um [projeto](https://github.com/maikaodev/consulta_cep) para consultar CEP. API foi desenvolvida a partir de um outro [endpoint](https://viacep.com.br/ws/04571010/json/). O objetivo de criar esse endpoint intermediário é trazer apenas os dados que vão ser utilizados no meu [frontend](https://github.com/maikaodev/consulta_cep). Em caso de requisições de CEPS inválidos é retornado um erro com status code 406. É tratado também o redirecionamento em casos de endpoints inexistentes.

### Aprendizado

 - Testes automatizados;
 - Utilizando AXIOS para consumir outra API;


### Tecnologias
 
 - [Express](http://expressjs.com/pt-br/);
 - [Axios](https://axios-http.com/);
 - [Body-parser](https://www.npmjs.com/package/body-parser);
 - [Cors](https://www.npmjs.com/package/cors);

