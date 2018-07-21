import React, { Component } from 'react';

import Card from '../Card/Card.js';

import vagas from '../../../assets/vagas';

class List extends Component {
    state = {
        jobs: []
    }

    componentDidMount = () => {
        this.setState({ jobs: vagas });
    }

    removeHandler = (id, nome) => {
        if(window.confirm(`Deseja realmente excluir a vaga ${nome}?`))
            window.alert('Excluido com sucesso!');
    }

    editHandler = (id, nome) => {
        window.alert(`Editar vaga ${nome}`);
    }

    render() {
        let vEncontradas = 
            this.state.jobs.map(vaga => {
                return(
                    <div key={vaga.id} className="col-sm-12 col-md-6 col-lg-4 mb-3">
                        
                        <Card 
                            area={vaga.area} 
                            name={vaga.name}
                            description= {vaga.description}
                            salary={vaga.salary}
                            removeHandler={() => this.removeHandler(1,'')}
                            editHandler={() => this.editHandler(1,'')}>
                        </Card>
                    </div>
                );
            });
        return(
            <div className="row mt-3">
                {vEncontradas}
            </div>
        )
    }
}


export default List;