import React from 'react'

import torus from './images/torus.png'

const Inicio = props => {
    return (
        <div className="container">
        <br/><br/><br/>
            <div id='about' className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-8'>
                        <h2>Legal, bem loco, empolgante. Leite!</h2>
                    </div>
                </div>
                <div>
                    <img src={torus} className='mx-auto d-block'/>
                </div>
            </div>
        </div>
    )
}

export default Inicio
