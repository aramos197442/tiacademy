import { Container } from 'reactstrap';
export const Home = () => {
    return (
        <div>
            <h1>
                <Container>
                    <div className="d-flex">
                        <div className="mr-auto p-2">
                            <h1>Página Inicial</h1>
                        </div>
                        <div className="p-2">
                            <a href="/visualizarcliente"
                                className="btn btn-outline-warning btn-sm">Cliente</a>
                        </div>
                        <div className="p-2">
                            <a href="/visualizarservico"
                                className="btn btn-outline-warning btn-sm">Servico</a>
                        </div>
                        <div className="p-2">
                            <a href="/visualizarpedido"
                                className="btn btn-outline-warning btn-sm">Pedido</a>
                        </div>
                    </div>

                </Container>

            </h1>
        </div>
    )
}