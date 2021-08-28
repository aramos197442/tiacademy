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

let port=process.env.PORT || 3000;

app.listen(port, (req,res)=>{
    console.log('Servidor esta ativo');
});

