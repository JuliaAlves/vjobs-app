import React from 'react';


import desenvolvimento from '../../../assets/images/developer.png';
import design from '../../../assets/images/designer.png';
import teste from '../../../assets/images/tester.png';
import {Link} from 'react-router-dom';

const card = (props) => {
  switch(props.area){
    case 'Desenvolvimento':
      var img = desenvolvimento;
      break;
    case 'Design':
      var img = design;
      break;
    case 'Teste':
      var img = teste;
      break;
  }
  return(
    <div className="card">
      <img className="card-img-top" src={ img } alt="Card image cap"></img>
      <div className="card-body">
        <h5 className="card-title">{ props.name }<Link to={`/vaga/${props.id}`} className=" ml-1"><i class="fas fa-info-circle"></i></Link></h5>
        <p className="card-text">
          <b>Descrição:</b>
          <p>{ props.description }</p>
          <b>Salário base:</b>
          <p>{ props.salary }</p>
        </p>
        <Link to={`/edit/${props.id}`} className="btn btn-warning"><i className="fas fa-edit"></i></Link>
        <a href="#" onClick={ props.removeHandler } className="btn btn-danger ml-1"><i className="far fa-trash-alt"></i></a>
        
      </div>
    </div>
  )
}

export default card;