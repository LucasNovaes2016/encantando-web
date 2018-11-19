import React, { Component } from 'react';
import './SextilhaInfo.css';
import PeopleRight  from '../../images/peopleRight.png';

export default class SextilhaInfo extends Component {

    render() {
        return (
            <div className = "main">
            	<img  id = "peopleRight"  src = { PeopleRight } alt = ""/>
            	<div className = "titleSext">
			<h1>A Sextilha </h1> <br/>
                </div>
                <div className = "info">
                	<p>A Sextilha é uma estrofe com rimas deslocadas, constituída de seis linhas, 
                	ou seis versos de sete sílabas, nomes que têm a mesma significação. Na Sextilha, 
                	rimam as linhas pares entre si, conservando as demais em versos brancos (sem rima obrigatória).</p>
			<p>Distribuição de Rimas na Sextilha: </p>
			<p> X A X A X A - Onde x é o verso branco - sem rima - e o A é o verso Rimado  </p>
                </div>
            </div>
        )
    }
}
