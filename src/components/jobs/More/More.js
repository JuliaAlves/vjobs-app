import React, {Component} from 'react';
import axios from 'axios';

class More extends Component{
    state = {
        job: {}
    }

    componentDidMount = () => {
        axios.get('/vaga/'+this.props.match.id)
            .then((res) => {
                this.setState({job: res})
            })
            .catch();
    }

    render(){
        return(<div>
            <h1>Vaga</h1>
            <p>
                <b>Nome: </b>
                <p>{this.state.job['name']}</p>
            </p>
        </div>
        )}
}

export default More;