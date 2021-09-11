import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home/';
import {Cliente} from './pages/Cliente/Cliente';
import {VisualizarCliente} from './pages/Cliente/VisualizarCliente/';
import {Servico} from './pages/Servico/Servico';
import {VisualizarServico} from './pages/Servico/VisualizarServico/';
import {Pedido} from './pages/Pedido/Pedido';
import {VisualizarPedido} from './pages/Pedido/VisualizarPedido/';
import { Menu } from './components/Menu';
import { Cadastrar } from './pages/Servico/Cadastrar';
import { EditarServico } from './pages/Servico/Editar';
import { CadastrarPedido } from './pages/Pedido/Cadastrar';
import { CadastrarCliente } from './pages/Cliente/Cadastrar';
import { EditarPedido } from './pages/Pedido/Editar';
import { EditarCliente } from './pages/Cliente/Editar';


function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
        <Route exact path="/" component={Home}/>

        <Route path="/cliente/:id" component={Cliente}/>
        <Route path="/cadastrarcliente" component={CadastrarCliente}/>
        <Route exact path="/editarcliente/:id" component={EditarCliente}/>
        <Route exact path="/visualizarcliente" component={VisualizarCliente}/>

        <Route path="/servico/:id" component={Servico}/>
        <Route path="/cadastrarservico" component={Cadastrar}/>
        <Route exact path="/editarservico/:id" component={EditarServico}/>
        <Route exact path="/visualizarservico" component={VisualizarServico}/>

        <Route path="/pedido/:id" component={Pedido}/>
        <Route path="/cadastrarpedido" component={CadastrarPedido}/>
        <Route exact path="/editarpedido/:id" component={EditarPedido}/>
        <Route exact path="/visualizarpedido" component={VisualizarPedido}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
