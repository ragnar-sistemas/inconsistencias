import React from 'react'
import { Link } from 'react-router-dom'

const Cabecalho = props => {
    return (
        <div>
            <nav className='navbar navbar-default navbar-fixed-top'>
                <div className='container'>
                    <div className='navbar-header'>
                        <ul className='nav navbar-nav navbar-right'>
                            <li><Link to='/'>Início</Link></li>
                            <li><Link to='/inconsistencias'>Inconsistências</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Cabecalho
