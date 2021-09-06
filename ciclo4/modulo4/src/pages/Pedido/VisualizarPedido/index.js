import { Alert, Container, Table } from "reactstrap";
import axios from 'axios';

import { api } from "../../../config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const VisualizarPedido = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getPedidos = async () => {
        await axios.get(api + '/listapedidos')
            .then((response) => {
                setData(response.data.pedidos);
            })
            .catch(() => {
                setStatus({
                    type: 'Error',
                    message: 'Error: Não foi possível conectar a API.'
                });

            });
    }
    useEffect(() => {
        getPedidos();
    }, []);

    return (
        <div className="p-3">
            <Container>
                { status.erro === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

                <Table striped hover >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>#</th>
                            <th>Cliente</th>
                            <th>#</th>
                            <th>Servico</th>
                            <th>Valor</th>
                            <th>Data</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.ClienteId}</td>
                                <td>{item.Cliente.nome}</td>
                                <td>{item.ServicoId}</td>
                                <td>{item.Servico.nome}</td>
                                <td>{item.valor}</td>
                                <td>{item.data}</td>
                                <td className="text-center"> 
                                    <Link to={"/pedido/"+item.id}
                                    className='btn btn-outline-primary btn-sm'>Consultar</Link>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </Container>
        </div>
    )
}