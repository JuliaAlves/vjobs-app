import React, { Component } from 'react';
import Axios from 'axios';
import {withRouter} from 'react-router-dom'

class Form extends Component{
    state = {
        newJob: {}
    }

    postDataHandler = (event) => {
        let vaga = {...this.state.newJob};
        if(this.props.add !== undefined && this.props.add !== ''){
            
            Axios.post('/vagas', vaga)
            .then((res) => {
                vaga.id = res.data;
                this.props.add(vaga);
            })
            .catch((error) => {
                console.log(error);
            });
        }
        else{
            Axios.put('/vagas/'+this.props.match.params.id, vaga)
            .then((res) => {
                alert('Alterado');
                this.props.history.push('/vagas');
            })
            .catch((error) => {
                console.log(error);
            });
        }

        event.preventDefault();
    }

    changeValueHandler = (nome, event) =>{
        let v = this.state.newJob;
        v[nome] = event;

        this.setState({newJob: v});
    }

    componentDidMount = () =>{
        if(this.props.add == undefined || this.props.add == ''){
            Axios.get('/vagas/'+this.props.match.params.id)
                .then((res)=>{
                    this.setState({newJob: res.data});
                })
                .catch(error => {console.log(error)});
        }
            
    }

    render(){
        switch(this.state.newJob['area']){
            case 'Desenvolvimento':
                var select = (
                    <select name="area"  onChange = {(event) =>this.changeValueHandler('area',event.target.value)} className="form-control">
                        <option disabled >Selecione a area</option>
                        <option selected>Desenvolvimento</option>
                        <option>Design</option>
                        <option>Teste</option>
                    </select>
                )
                break;
            case 'Design':
                var select = (
                    <select name="area"  onChange = {(event) =>this.changeValueHandler('area',event.target.value)} className="form-control">
                        <option disabled >Selecione a area</option>
                        <option>Desenvolvimento</option>
                        <option selected>Design</option>
                        <option>Teste</option>
                    </select>
                )
                break;
            case 'Teste':
                var select = (
                    <select name="area"  onChange = {(event) =>this.changeValueHandler('area',event.target.value)} className="form-control">
                        <option disabled >Selecione a area</option>
                        <option>Desenvolvimento</option>
                        <option>Design</option>
                        <option selected>Teste</option>
                    </select>
                )
                break;
            default:
                var select = (
                    <select name="area"  onChange = {(event) =>this.changeValueHandler('area',event.target.value)} className="form-control">
                        <option disabled selected>Selecione a area</option>
                        <option>Desenvolvimento</option>
                        <option>Design</option>
                        <option>Teste</option>
                    </select>
                )
        }
        return(
            <form>
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input type="text" value={this.state.newJob['name']} onChange={(event) =>this.changeValueHandler('name',event.target.value)} className="form-control" name="name" />
                </div>

                <div className="form-group">
                    <label htmlFor="desc">Descrição</label>
                    <textarea name="desc" value={this.state.newJob['description']} cols="40" onChange={(event) =>this.changeValueHandler('description',event.target.value)} className="form-control" rows="4"></textarea>
                </div>

                <div className="row">
                    <div className="form-group col-6">
                        <label htmlFor="hab">Habilidades necessárias</label>
                        <textarea name="hab"  value={this.state.newJob['skills']} onChange = {(event) =>this.changeValueHandler('skills',event.target.value)} cols="20" className="form-control" rows="4"></textarea>
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="dif">Diferencial</label>
                        <textarea name="dif" cols="20" value={this.state.newJob['differentials']} onChange = {(event) =>this.changeValueHandler('differentials',event.target.value)}className="form-control" rows="4"></textarea>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-6">
                            <label htmlFor="sal">Salário Base</label>
                            <input type="text" value={this.state.newJob['salary']} onChange = {(event) =>this.changeValueHandler('salary',event.target.value)} className="form-control" name="sal"/>
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="area">Área</label>
                        { select }
                    </div>
                </div>                 
                <div className="float-right mt-2">
                    <button type="submit" onClick={ this.postDataHandler } className="btn btn-success">Salvar</button>                                                                   
                </div>
            </form>
        )
    }              

}
export default withRouter(Form);