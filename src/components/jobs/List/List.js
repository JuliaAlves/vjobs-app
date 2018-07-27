import React, { Component } from 'react';

import Card from '../Card/Card.js';
import Loading from '../../Loading/Loading.js';
import Form from '../Form/Form.js';
import Collapse from '../../../hoc/Collapse/Collapse.js';

import axios from 'axios';

class List extends Component {
    state = {
        jobs: []
    }

    componentDidMount = () => {
        axios.get('/vagas')
             .then((res) => {
                this.setState({ jobs : res.data});
             })
             .catch(error => {
                 console.log(error);
             })
    }

    removeHandler = (id) => {
        const axiosConfig ={
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('token')
            }
        }

        if(window.confirm(`Deseja realmente excluir essa vaga?`))
            axios.delete('/vagas/'+ id, axiosConfig)
            .then((res) =>{
                let v = this.state.jobs;
                v.splice(v.findIndex(el => el.id === id),1);
                this.setState({jobs: v});
                alert(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    editHandler = (id, nome) => {
        window.alert(`Editar vaga ${nome}`);
    }

    addItemToList = (newItem) => {
        let v = this.state.jobs;
        v.push(newItem);
        this.setState({ jobs: v });
    }

    render() {
        if (this.state.jobs.length > 0 || this.setState.jobs !== undefined)
            var vEncontradas = 
                this.state.jobs.map(vaga => {
                    return(
                        <div key={vaga.id} className="col-sm-12 col-md-6 col-lg-4 mb-3">
                            
                            <Card
                                id={vaga.id}
                                area={vaga.area} 
                                name={vaga.name}
                                description= {vaga.description}
                                salary={vaga.salary}
                                removeHandler={() => this.removeHandler(vaga.id)}
                                editHandler={() => this.editHandler(vaga.id)}>
                            </Card>
                        </div>
                    );
                });
        else 
            var vEncontradas = <Loading />;
            
        return(
            <div>
                <Collapse collapseID='register' innerText='Nova Vaga'>
                    <Form add= { this.addItemToList }/>
                </Collapse>
                <div className="row mt-3">
                    {vEncontradas}
                </div>
            </div>
        )
    }
}

export default List;