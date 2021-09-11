import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from 'reactstrap';
import { api, headers } from '../../../config';


export const EditarPedido = (props) => {

    const [id] = useState(props.match.params.id);

    const [clienteid, setClienteId] = useState('');
    const [servicoid, setServicoId] = useState('');
    const [valor, setValor] = useState('');
    const [data, setData] = useState('');


    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const edtPedido = async e => {
        e.preventDefault();
        console.log('Editar')

        setStatus({
            formSave:true
        });

        await axios.put(api+'/editarpedido', {id, clienteid, servicoid, valor, data},  {headers})
        .then((response)=>{
            console.log(clienteid);
            console.log(response.data.message);

            setStatus({
                formSave:false
            });
        })
        .catch(()=>{
            setStatus({
                type:'error',
                message:'Não foi possível acessar a API.'
            });
        });
    };

    useEffect(()=>{
        const getPedido = async ()=>{
            await axios.get(api+'/pedido/'+id)
            .then((response)=>{
                setClienteId(response.data.pedido.ClienteId);
                setServicoId(response.data.pedido.ServicoId);
                setValor(response.data.pedido.valor);
                setData(response.data.pedido.data);
            })
            .catch(()=>{
                console.log('Erro: Não foi possível conectar a API.')
            });
        }
        getPedido();
    },[id]);

    return (
        <div>
            <h1>
                <Container>
                    <div className="d-flex">
                        <div className="mr-auto p-2">
                            <h1>Editar pedido</h1>
                        </div>
                        <div>
                            <Link to={"/visualizarpedido/"}
                                className='btn btn-outline-primary btn-sm m-1'>Listar</Link>
                            <Link to={"/pedido/" + id}
                                className='btn btn-outline-primary btn-sm m-1'>Consultar</Link>

                        </div>

                    </div>
                    <hr className="m-1" />

                    {status.type === 'error' ? <Alert color='danger'>{status.message}</Alert> : ''}
                    {status.type === 'success' ? <Alert color='success'>{status.message}</Alert> : ''}

                    <Form className="p-2" onSubmit={edtPedido}>
                        <FormGroup className="p-2">
                            <Label>Cliente ID</Label>
                            <Input type="text" name="clienteid" placeholder="Código do cliente" value={clienteid} />

                        </FormGroup>
                        <FormGroup className="p-2">
                            <Label >Serviço ID</Label>
                            <Input type="text" name="servicoid" placeholder="Código do serviço"  value={servicoid} />

                        </FormGroup>

                        <FormGroup className="p-2">
                            <Label >Valor</Label>
                            <Input type="number" name="valor" placeholder="Valor"  value={valor} onChange={e => setValor(e.target.value)}/>

                        </FormGroup>

                        <FormGroup className="p-2">
                            <Label >data</Label>
                            <Input type="date" name="data" placeholder="Data"  value={data} onChange={e => setData(e.target.value)}/>

                        </FormGroup>

                        {status.formSave ? <Button type="submit" outline color="warning" disabled className='m-1'>Salvando... <Spinner children='' color="secondary" /> </Button> :
                            <Button type="submit" outline color="warning" className='m-1'>Salvar</Button>}
                        
                    </Form>


                </Container>
            </h1>
        </div>
    )
}

