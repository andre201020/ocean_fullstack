const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Rellou Vuorldi!');
});

app.get('/oi', function (req, res) {
  res.send('Oi mundão vei de guerra, cada vez mais dominado por homis marvados e covardes!! E aqui no Brazil-Brazuca, cada vez mais estes homis estão mais armados... covardes malditos  ');
});

//sistema de ranking - criar lista de pontuações
//IMPORTANTE: no javascrip o uso das aspas (simples ou duplas) para a chave e o valor para os itens da coleção é opcional, já no JSON o uso das aspas duplas é obrigatório para a chave e o valor
const lista = [
  {
    id:1,
    nome: "Paulo",
    pontos: 10,
  },
  {
    id:2,
    nome: "De",
    pontos: 5,
  },
  {
    id:1,
    nome: "Dedáxi",
    pontos: 6,
  },
];

//Endpoint READ ALL - [GET] / pontuacoes
app.get('/pontuacoes', function (req, res) {
  res.send(lista);
});

//Endpoint READ ALL - [GET] / pontuacoes
app.post("/pontuacoes", function (req, res) {
  const item = req.body;
  console.log(item);
  res.send("cria pontuação");
});

/*lista.push({
  id: lista.length + 1,
  nome: item.nome,

});
*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});