import React from 'react';


const card = (props) => (

    <div className="card">
      <img className="card-img-top" src={ props.img } alt="Card image cap"></img>
      <div className="card-body">
        <h5 className="card-title">{ props.nome }</h5>
        <p className="card-text">
          <b>Descrição:</b>
          <p>{ props.descricao }</p>
          <b>Salário base:</b>
          <p>{ props.salario }</p>
        </p>
        <a href="#" className="btn btn-warning"><i className="fas fa-edit"></i></a>
        <a href="#" className="btn btn-danger ml-1"><i className="far fa-trash-alt"></i></a>
      </div>
    </div>
)

export default card;