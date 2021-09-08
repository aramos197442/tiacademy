import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { api } from "../../../config";

export const Servico = (props) => {

    const [data, setData] = useState([]);
    const [id, setID] = useState(props.match.params.id);

    useEffect(() => {
        const getServico = async () => {
            await axios.get(api + '/servico/' + id)
                .then((response) => {
                    console.log(response.data.servico);
                    setData(response.data.servico);
                })
                .catch(() => {
                    console.log("Erro: Não foi possível conectar a API.");
                })
        }
        getServico();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Informações do Serviço</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizarservico"
                            className="btn btn-outline-warning btn-sm">Serviços</Link>
                    </div>
                </div>
                <dl className="row">
                    <dt className="col-sm-3">Nome</dt>
                    <dd className="col-sm-9">{data.nome}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Descrição</dt>
                    <dd className="col-sm-6">{data.descricao}</dd>
                </dl>
            </Container>
        </div>
    )
}