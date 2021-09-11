import { Alert, Container, Table } from "reactstrap";
import axios from 'axios';

import { api, headers } from "../../../config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const VisualizarCliente = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getClientes = async () => {
        await axios.get(api + '/listaclientes')
            .then((response) => {
                console.log(response.data.clientes);
                setData(response.data.clientes);
            })
            .catch(() => {
                setStatus({
                    type: 'Error',
                    message: 'Error: Não foi possível conectar a API.'
                });

            });
    }

    const apagarCliente = async (idCliente) => {
        console.log(idCliente);

        await axios.delete(api + '/apagarcliente/' + idCliente, { headers })
            .then((response) => {
                console.log(response.data.error);
                getClientes();

            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possivel acessar a API.'

                });
            });
    }


    useEffect(() => {
        getClientes();
    }, []);

    return (
        <div className="p-3">
            <Container>
                { status.erro === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Informações do Cliente</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/cadastrarcliente"
                            className="btn btn-outline-warning btn-sm">Cadastrar</Link>
                    </div>
                </div>

                <Table striped hover >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Cidade</th>
                            <th>UF</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.cidade}</td>
                                <td>{item.uf}</td>
                                <td className="text-center"> 
                                    <Link to={"/cliente/"+item.id}
                                    className='btn btn-outline-primary btn-sm'>Consultar</Link>
                                    <Link to={"/editarcliente/" + item.id}
                                        className='btn btn-outline-warning btn-sm'>Editar</Link>
                                    <span className="btn btn-outline-danger btn-sm m-1" onClick={() => apagarCliente(item.id)}>Exclur</span>

                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </Container>
        </div>
    )
}