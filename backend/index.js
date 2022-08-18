const express = require('express');
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "jornada-fullstack-agosto-22";

//declarar função main()
async function main() {
//realizar a conexão o MongoClent
//MongoClent -> MongoDAtabase -> MongoCollection

// Conexões com o client podem levar um tempo para efetivarem. 
//Portanto, utilizamos o mecanismo de Promises do JavaScript, 
//que permite aguardar esse tempo.
//Para isso, vamos usar o async/await

console.log(`Tentando conexão com o DB...`);

/*
const client = await MongoClient.connect(url);
const db = client.db(dbName);
const collection = db.collection("pontuacoes");
*/

console.log(`Conectado com sucesso ao DB!`);

const app = express();
const port = 3000;

let rota;

//sinalizamos para o express que stamos usando JSON no body das requisições
app.use(express.json());

app.get('/', (req, res) => {
  rota = '/';
  console.log(`Rota: ${rota} - [GET]`);
  res.send('Rellou Vuorldi!');
});

app.get('/oi', function (req, res) {
  rota = '/oi';
  console.log(`Rota: ${rota} - [GET]`);
  res.send('Brazil-Brazuca dos homi marvado e armado!! Mardita mardição de marvado armado!! ');
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
    id:3,
    nome: "Dedáxi",
    pontos: 6,
  },
];

//Endpoint READ ALL - [GET] / pontuacoes
app.get('/pontuacoes', async function (req, res) {
  const itens = await collection
  .find()
  .sort({pontos: -1}) //ordenação: - '-1' por ordem decrescente; - '+1' por ordem crescente; 
  .limit(10) //retorna até 10 documentos/registros
  .toArray();
  rota = `/pontuacoes`;
  console.log(`Rota: ${rota} - [GET]`);
  //res.send(lista);
  res.send(itens);

});

//Endpoint READ ALL - [GET] / pontuacoes
app.post("/pontuacoes", async function (req, res) {
  const item = req.body;
  //console.log(item);
  //res.send("cria pontuação");

//adicionar o item na lista
//lista.push({
//  id: lista.length + 1,
//  nome: item.nome,
//  pontos: item.pontos,

  await collection.insertOne(item);
  res.send(item);
});

app.listen(port, () => {
  console.log(`ouvindo na porta: ${port}`);
});

}

//executar a função main()
main();