import React from 'react';

const form = () =>(
    <div>
        <div className="row mt-3">
            <div className="col-2">
                <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#register" aria-expanded="false" aria-controls="register">Nova vaga</button>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col">
                <div className="collapse multi-collapse" id="register">
                    <div className="card">
                        <div className="card-tittle mt-3 ml-3">
                            <h5>Cadastro</h5>
                        </div>

                        <div className="card-body">
                            <form action="#">
                                <div className="form-group">
                                    <label htmlFor="name">Nome</label>
                                    <input type="text" className="form-control" name="name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="desc">Descrição</label>
                                    <textarea name="desc" cols="40" className="form-control" rows="4"></textarea>
                                </div>

                                <div className="row">
                                    <div className="form-group col-6">
                                        <label htmlFor="hab">Habilidades necessárias</label>
                                        <textarea name="hab" cols="20" className="form-control" rows="4"></textarea>
                                    </div>

                                    <div className="form-group col-6">
                                        <label htmlFor="dif">Diferencial</label>
                                        <textarea name="dif" cols="20" className="form-control" rows="4"></textarea>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group col-6">
                                            <label htmlFor="sal">Salário Base</label>
                                            <input type="text" className="form-control" name="sal"/>
                                    </div>

                                    <div className="form-group col-6">
                                        <label htmlFor="area">Área</label>
                                        <select name="area" className="form-control">
                                            <option>Desenvolvimento</option>
                                            <option>Design</option>
                                            <option>Teste</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-check col-3">
                                    <input type="checkbox" className="form-check-input" id="isPCD" />
                                    <label className="form-check-label" htmlFor="isPCD">Vaga para PCD</label>
                                </div>
                                    
                                <div className="float-right mt-2">
                                    <button type="submit" className="btn btn-success">Criar vaga</button>                                                                   
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default form;