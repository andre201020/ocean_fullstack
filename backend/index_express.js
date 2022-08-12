const express = require("express");
const app = express();
const porta = 3000;

//endpoint 1 - chamada pelo browser "http://localhost:porta/"
app.get("/",function(req, res) {
    res.send("Relou Uorldi!");
});
//endpoint 2 - chamada pelo browser "http://localhost:porta/oi"
app.get("/oi",function(req, res) {
    res.send("Oi mundim veim di guerrinhas sem fim!!");
});

//endpoints de heróis
const herois = ["Muié Maraviosa", "Capetão Pinóquio", "Ômi ferro-velho", "meus eleitos grandes heróis... amém ????!", "meu herói favorito", "meu herói, meu herói, meu herói ..."]

//[GET] /herois -> Read All (ler tudo)
app.get("/herois", function (req, res) {
    res.send(herois.filter(Boolean));
});

//[GET] /herois/:id -> Read by ID (ler pelo ID)
app.get("/herois/:idzim", function (req, res) {
    //pegar o ID pela rota (mesmo nome )
    const id = req.params.idzim
    res.send(herois[id - 1]);
});

//[POST] /herois -> Create (criar/incluir)
app.post("/herois", function (req, res) {
    //console.log(req.body);
    //res.send("Criar um trem...");
    const item = req.body.nome;
    herois.push(item);
    res.send("Item incluído com sucesso!");
});

//[PUT]/herois/:id -> update (atualizar)
app.put("/herois/:idputao", function() {
    //pegar ID
    const id = req.body.idputao;
    //pegar item a ser atualizado
    const item = req.body.nome;
    //atualizar na lista o valor recebido
    herois[id - 1] = item;
    //mostrar mensagem de sucesso
    res.send("item atualizado com sucesso!");
});

//[DELETE] /herois/:id -> Delete (Remover)
app.delete("/herois/:id", function(req,res){
    //pegar id
    const id = req.body.id;
    //remove item da lista
    delete herois[id - 1];
    //mensagem de sucesso
    res.send("item removido com sucesso!")
});

app.listen(porta, function (){
    console.log(`Aplicação rodando em http://localhost:${porta}`); 
});