import React, {Component} from 'react';
import axios from 'axios';

class More extends Component{
    state = {
        job: {}
    }

    componentDidMount = () => {
        axios.get('/vagas/'+this.props.match.params.id)
            .then((res) => {
                this.setState({job: res.data})
            })
            .catch(error => {console.log(error)});
    }

    render(){
        return(<div>
            <h4 className='mt-3 mb-3'>Vaga</h4>
            <p>
                <b>Nome: </b>
                <p>{this.state.job['name']}</p>
            </p>
            <p>
                <b>Descrição: </b>
                <p>{this.state.job['description']}</p>
            </p>
            <p>
                <b>Salário base: </b>
                <p>{this.state.job['salary']}</p>
            </p>
            <p>
                <b>Habilidades necessárias: </b>
                <p>{this.state.job['skills']}</p>
            </p>
            <p>
                <b>Diferenciais: </b>
                <p>{this.state.job['differentials']}</p>
            </p>
        </div>
        )}
}

export default More;