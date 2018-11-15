import React, { Component } from 'react';
import './SextilhaInfo.css';


import PeopleRight  from '../../images/peopleRight.png';

export default class SextilhaInfo extends Component {

    render() {
        return (
            <div className = "main">

            	<img  id = "peopleRight"  src = { PeopleRight } alt = ""/>

            	<div className = "titleSext">
					<h1>EXPLICANDO O CORDEL <br /> </h1>
               
                </div>

                <div className = "info">
                	<p>A Sextilha é uma estrofe com rimas deslocadas, constituída de seis linhas, 
                	ou seis versos de sete sílabas, nomes que têm a mesma significação. Na Sextilha, 
                	rimam as linhas pares entre si, conservando as demais em versos brancos (sem rima obrigatória).</p>
                </div>

            </div>
        )
    }
}