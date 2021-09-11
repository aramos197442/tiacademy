import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from 'reactstrap';
import { api, headers } from '../../../config';


export const EditarCliente = (props) => {

    const [id] = useState(props.match.params.id);

    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [nascimento, setNascimento] = useState('');


    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const edtCliente = async e => {
        e.preventDefault();
        console.log('Editar')

        setStatus({
            formSave: true
        });


        await axios.put(api + '/editarcliente', { id, nome, endereco, cidade, uf, nascimento }, { headers })
            .then((response) => {

                setStatus({
                    formSave: false,
                    Type: 'success',
                    message: 'Cliente alterado!'
                });
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Não foi possível acessar a API.'
                });
            });
    };

    useEffect(() => {
        const getCliente = async () => {
            await axios.get(api + '/cliente/' + id)
                .then((response) => {
                    setNome(response.data.cliente.nome);
                    setEndereco(response.data.cliente.endereco);
                    setCidade(response.data.cliente.cidade);
                    setUf(response.data.cliente.uf);
                    setNascimento(response.data.cliente.nascimento);
                })
                .catch(() => {
                    setStatus({
                        type: 'error',
                        message: 'Erro: Não foi possível conectar a API.'
                    });
                });
        }
        getCliente();
    }, [id]);

    return (
        <div>
            <h1>
                <Container>
                    <div className="d-flex">
                        <div className="mr-auto p-2">
                            <h1>Editar cliente</h1>
                        </div>
                        <div>
                            <Link to={"/visualizarcliente/"}
                                className='btn btn-outline-primary btn-sm m-1'>Listar</Link>
                            <Link to={"/cliente/" + id}
                                className='btn btn-outline-primary btn-sm m-1'>Consultar</Link>

                        </div>

                    </div>
                    <hr className="m-1" />

                    {status.type === 'error' ? <Alert color='danger'>{status.message}</Alert> : ''}
                    {status.type === 'success' ? <Alert color='success'>{status.message}</Alert> : ''}

                    <Form className="p-2" onSubmit={edtCliente}>
                        <FormGroup className="p-2">
                            <Label>Nome</Label>
                            <Input type="text" name="nome" placeholder="Nome do cliente" value={nome} onChange={e => setNome(e.target.value)} />

                        </FormGroup>
                        <FormGroup className="p-2">
                            <Label >Endereço</Label>
                            <Input type="text" name="endereco" placeholder="Endereço" value={endereco} onChange={e => setEndereco(e.target.value)} />

                        </FormGroup>

                        <FormGroup className="p-2">
                            <Label >Cidade</Label>
                            <Input type="text" name="cidade" placeholder="Cidade" value={cidade} onChange={e => setCidade(e.target.value)} />

                        </FormGroup>

                        <FormGroup className="p-2">
                            <Label >UF</Label>
                            <Input type="select" name="uf" placeholder="UF" value={uf} onChange={e => setUf(e.target.value)}>
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
                            <Input type="date" name="nascimento" placeholder="Data de nascimento" value={nascimento} onChange={e => setNascimento(e.target.value)} />
                        </FormGroup>

                        {status.formSave ? <Button type="submit" outline color="warning" disabled className='m-1'>Salvando... <Spinner children='' color="secondary" /> </Button> :
                            <Button type="submit" outline color="warning" className='m-1'>Salvar</Button>}

                    </Form>


                </Container>
            </h1>
        </div>
    )
}

