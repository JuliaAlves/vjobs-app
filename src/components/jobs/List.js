import React, { Component } from 'react';

import Card from './Card.js';

import img1 from '../../assets/images/developer.png';
import img2 from '../../assets/images/designer.png';
import img3 from '../../assets/images/tester.png';

const list = () => (
    <div className="row mt-3">
        <div className="col-sm-12 col-md-6 col-lg-4">
            <Card img={ img1 } nome="Desenvolvedor Front-end JR" descricao="Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software
                e que tenha experiencia em desenvolvimento full-stack." salario="R$ 10,00"></Card>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
            <Card img={ img2 } nome="Designer UI/UX PL" descricao="Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software
                e que tenha experiencia em desenvolvimento full-stack." salario="R$ 100,00"></Card>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
            <Card img={ img3 } nome="Tester - Estágio" descricao="Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software
                e que tenha experiencia em desenvolvimento full-stack." salario="R$ 10,00"></Card>
        </div>
    </div>

);

export default list;