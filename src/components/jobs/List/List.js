import React, { Component } from 'react';

import Card from '../Card/Card.js';
import Loading from '../../Loading/Loading.js';

import axios from 'axios';
import loading from '../../Loading/Loading.js';

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
        console.log(id);
        if(window.confirm(`Deseja realmente excluir essa vaga?`))
            axios.delete('/vagas/'+ id)
            .then((res) =>{
                console.log(res);
                this.location.reload();
            })
            .catch(error => {
                console.log(error);
            })
    }

    editHandler = (id, nome) => {
        window.alert(`Editar vaga ${nome}`);
    }

    render() {
        if (this.state.jobs.length > 0 || this.setState.jobs !== undefined)
            var vEncontradas = 
                this.state.jobs.map(vaga => {
                    return(
                        <div key={vaga.id} className="col-sm-12 col-md-6 col-lg-4 mb-3">
                            
                            <Card
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
                var vEncontradas = <loading />;
            
        return(
            <div className="row mt-3">
                {vEncontradas}
            </div>
        )
    }
}

export default List;