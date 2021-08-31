const express = require('express');
const cors = require('cors');

const models=require('./models');


const app = express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let servico=models.Servico;
let pedido=models.Pedido;

app.get('/', function(req,res){
    res.send('Olá Mundo!');
});

/*app.get('/cliente', async(req,res)=>{
    let create = await cliente.create({
        nome: 'Alexandre Ramos da Silva',
        endereco: 'Rua dos Crisantemos, 666',
        cidade: 'SeiLaDoQuê',
        uf:'SP',
        nascimento: '1921-08-02'
    })
    res.send('CLIENTE ADICIONADO!');
}); ---- Versão de inserção literal direta no código*/


// Esta versão abaixo permite a inserção de clientes via json (Postman)
app.post('/clientes', async(req,res)=>{
    let create = await cliente.create(
        req.body
 
    );
    res.send('CLIENTE ADICIONADO!');
}); 


/*app.get('/pedido', function(req,res){
    res.send('PEDIDO!');
});   ----- Versão que só mostra uma mensagem na pagina de Pedido*/

app.post('/pedidos', async(req,res)=>{
    let create = await pedido.create(
        req.body
    );

    res.send('PEDIDO ADICIONADO!');
});

app.post('/servicos', async(req,res)=>{
    let create = await servico.create(
        req.body
    );

    res.send('SERVIÇO ADICIONADO!');
});

app.get('/listaservicos', async(req,res)=>{
    await servico.findAll({
//        raw:true  // listando desordenadamente...
          order: [['nome','DESC']]
    }).then(function(servicos){
        res.json({servicos})
    });
});

// ------------ EXERCÍCIOS DE 30/08/2021 ---------------------
//
//
// Exercicio 1: Lista todos os clientes
app.get('/listaclientes', async(req,res)=>{  
    await cliente.findAll({
//        raw:true  // listando desordenadamente...
          order: [['nome','ASC']]
    }).then(function(clientes){
        res.json({clientes})
    });
});

// Exercicio 2: Lista clientes por ordem de antiguidade
app.get('/lclipornasc', async(req,res)=>{
    await cliente.findAll({
//        raw:true  // listando desordenadamente...
          order: [['nascimento','DESC']]
    }).then(function(clientes){
        res.json({clientes})
    });
});

// Exercicio 3: Lista todos os pedidos
app.get('/listapedidos', async(req,res)=>{
    await pedido.findAll({
        raw:true  // listando desordenadamente...
//          order: [['nome','DESC']]
    }).then(function(pedidos){
        res.json({pedidos})
    });
});

// Exercicio 4: Lista pedidos por ordem de maior para menor valor
app.get('/lpedidos', async(req,res)=>{
    await pedido.findAll({
          order: [['valor','DESC']]
    }).then(function(pedidos){
        res.json({pedidos})
    });
});

// Exercicio 5: Quantidade de clientes
app.get('/qtdecli', async(req,res)=>{
    await cliente.count('id').then(function(cliente){
        res.json({cliente})
    });
});

// Exercicio 6: Quantidade de pedidos
app.get('/qtdepedidos', async(req,res)=>{
    await pedido.count('id').then(function(pedido){
        res.json({pedido})
    });
});
//
//
// ----------------------------- FIM DOS EXERCICIOS DE 30/08/2021 --------------

// ----------------------------- DESAFIO DE 30/08/2021 -------------------------
const { Op } = require("sequelize");

app.get('/totalcliente/:clienteId', async(req,res)=>{
    await pedido.sum('valor', { where: { ClienteId:{[Op.eq]: req.params.clienteId} } })
    .then(saldo=>{
        return res.json({
            error: false,
            saldo
        });
    }).catch(function(erro){
            return res.status(400).json({
            error: true,
            message: "Cliente sem pedidos!"
        });
    });
});


// ----------------------------- FIM DO DESAFIO DE 30/08/2021 --------------------

app.get('/ofertas', async(req,res)=>{
    await servico.count('id').then(function(servicos){
        res.json({servicos})
    });
});

app.get('/servico/:id', async(req,res)=>{
    servico.findByPk(req.params.id)
    .then(servico=>{
        return res.json({
            error: false,
            servico
        });
    }).catch(function(erro){
            return res.status(400).json({
            error: true,
            message: "Código não cadastrado!"
        });
    });
});

let port=process.env.PORT || 3000;

app.listen(port, (req,res)=>{
    console.log('Servidor esta ativo');
});

