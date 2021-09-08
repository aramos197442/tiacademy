import { Alert, Container, Table } from "reactstrap";
import axios from 'axios';

import { api } from "../../../config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const VisualizarServico = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getServicos = async () => {
        await axios.get(api + '/listaservicos')
            .then((response) => {
                setData(response.data.servicos);
            })
            .catch(() => {
                setStatus({
                    type: 'Error',
                    message: 'Error: Não foi possível conectar a API.'
                });

            });
    }
    useEffect(() => {
        getServicos();
    }, []);

    return (
        <div className="p-3">
            <Container>
                { status.erro === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Informações do Serviço</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/cadastrarservico"
                            className="btn btn-outline-warning btn-sm">Cadastrar</Link>
                    </div>
                </div>

                <Table striped hover >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Serviço</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.descricao}</td>
                                <td className="text-center"> 
                                    <Link to={"/servico/"+item.id}
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