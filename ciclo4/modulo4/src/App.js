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


function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/cliente/:id" component={Cliente}/>
        <Route exact path="/visualizarcliente" component={VisualizarCliente}/>
        <Route path="/servico/:id" component={Servico}/>
        <Route exact path="/visualizarservico" component={VisualizarServico}/>
        <Route path="/pedido/:id" component={Pedido}/>
        <Route exact path="/visualizarpedido" component={VisualizarPedido}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
