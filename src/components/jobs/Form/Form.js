import React, { Component } from 'react';
import Axios from 'axios';

class Form extends Component{
    state = {
        newJob: {}
    }

    postDataHandler = (event) => {
        let vaga = {...this.state.newJob};
        Axios.post('/vagas', vaga)
        .then((res) => {
            vaga.id = res.data;
            this.props.add(vaga);
        })
        .catch(() => {

        });

        event.preventDefault();
    }

    changeValueHandler = (nome, event) =>{
        let v = this.state.newJob;
        v[nome] = event;

        this.setState({newJob: v});
    }

    render(){
        return(
            <form>
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input type="text" onChange={(event) =>this.changeValueHandler('name',event.target.value)} className="form-control" name="name" />
                </div>

                <div className="form-group">
                    <label htmlFor="desc">Descrição</label>
                    <textarea name="desc" cols="40" onChange={(event) =>this.changeValueHandler('description',event.target.value)} className="form-control" rows="4"></textarea>
                </div>

                <div className="row">
                    <div className="form-group col-6">
                        <label htmlFor="hab">Habilidades necessárias</label>
                        <textarea name="hab"  onChange = {(event) =>this.changeValueHandler('skills',event.target.value)} cols="20" className="form-control" rows="4"></textarea>
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="dif">Diferencial</label>
                        <textarea name="dif" cols="20"  onChange = {(event) =>this.changeValueHandler('differentials',event.target.value)}className="form-control" rows="4"></textarea>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-6">
                            <label htmlFor="sal">Salário Base</label>
                            <input type="text"  onChange = {(event) =>this.changeValueHandler('salary',event.target.value)} className="form-control" name="sal"/>
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="area">Área</label>
                        <select name="area"  onChange = {(event) =>this.changeValueHandler('area',event.target.value)} className="form-control">
                            <option disabled selected>Selecione a area</option>
                            <option>Desenvolvimento</option>
                            <option>Design</option>
                            <option>Teste</option>
                        </select>
                    </div>
                </div>
                <div className="form-group form-check col-3">
                    <input type="checkbox"  onChange = {(event) =>this.changeValueHandler('isPcd',event.target.value)} className="form-check-input" id="isPCD" />
                    <label className="form-check-label" htmlFor="isPCD">Vaga para PCD</label>
                </div>
                    
                <div className="float-right mt-2">
                    <button type="submit" onClick={ this.postDataHandler } className="btn btn-success">Criar vaga</button>                                                                   
                </div>
            </form>
        )
    }              

}
export default Form;