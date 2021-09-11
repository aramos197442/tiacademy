import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from "reactstrap"
import { api, headers } from "../../../config";

export const CadastrarCliente = () => {

    const [cliente, setCliente] = useState({
        nome: '',
        endereco: '',
        cidade: '',
        uf: '',
        nascimento: ''
    });

    const [status, setStatus] = useState({
        formSave: false,
        type:'',
        status:''
    })

    const valorInput = e => setCliente({
        ...cliente, [e.target.name]: e.target.value
    });

    const cadCliente = async e => {
        e.preventDefault();
    
        setStatus({
            formSave:true
        });        


        await axios.post(api + '/clientes', cliente, {headers})
            .then((response) => {
                if( response.data.error){
                    setStatus({
                        formSave: false,
                        type:'error',
                        message: response.data.message
                    })
                    
                }else{
                    setStatus({
                        formSave: false,
                        type:'success',
                        message: response.data.message
                    })
                }
            })
            .catch(() => {
                setStatus({
                    formSave: false,
                    type:'error',
                    message: 'Erro: Não foi possivel se conectar a API.'
                })
                
            });

    }
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Cadastrar Serviço</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizarcliente"
                            className="btn btn-outline-warning btn-sm">Listar</Link>
                    </div>
                </div>
                <hr className="m-1" />

                {status.type === 'error' ? <Alert color='danger'>{status.message}</Alert>:''}
                {status.type === 'success' ? <Alert color='success'>{status.message}</Alert>:''}

                <Form className="p-2" onSubmit={cadCliente}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome" placeholder="Nome" onChange={valorInput} />

                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label >Endereço</Label>
                        <Input type="text" name="endereco" placeholder="Endereço do cliente" onChange={valorInput} />

                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label >Cidade</Label>
                        <Input type="text" name="cidade" placeholder="Cidade" onChange={valorInput} />

                    </FormGroup>

                    <FormGroup className="p-2">
                            <Label >UF</Label>
                            <Input type="select" name="uf" placeholder="UF" onChange={valorInput}>
                                <option>AC</option>
                                <option>AL</option>
                                <option>AP</option>
                                <option>BA</option>
                                <option>CE</option>
                                <option>DF</option>
                                <option>ES</option>
                                <option>GO</option>
                                <option>MA</option>
                                <option>MT</option>
                                <option>MS</option>
                                <option>MG</option>
                                <option>PA</option>
                                <option>PB</option>
                                <option>PR</option>
                                <option>PE</option>
                                <option>PI</option>
                                <option>RJ</option>
                                <option>RN</option>
                                <option>RS</option>
                                <option>RO</option>
                                <option>RR</option>
                                <option>SC</option>
                                <option>SP</option>
                                <option>SE</option>
                                <option>TO</option>
                            </Input>
                            

                        </FormGroup>

                    <FormGroup className="p-2">
                        <Label >Dt. Nascimento</Label>
                        <Input type="date" name="nascimento" placeholder="Data de nascimento" onChange={valorInput} />

                    </FormGroup>

                    {status.formSave ? <Button type="submit" outline color="info" disabled>Salvando... <Spinner color="secondary" /> </Button> :
                                        <Button type="submit" outline color="info">Cadastrar</Button>}
                </Form>

            </Container>

        </div>
    )
}