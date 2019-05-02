import React, { Component } from 'react'

import InconsistenciaData from '../dados/inconsistencias.json'
import Inconsistencia from './Inconsistencia'

class InconsistenciaList extends Component {

	render(){
		return (
			<div className="container">
				<h2>Inconsitências Para Geração de Lançamentos</h2>
				<table className="table table-condensed">
					<thead>
				      <tr>
				      	<th>Id</th>
				        <th>Inconsitência</th>
				        <th/>
				      </tr>
				    </thead>
				    <tbody>
				    	{
				    		InconsistenciaData.map(
				    			(inconsistenciaDetalhe, index) => {
									return <Inconsistencia 
										id={inconsistenciaDetalhe.id} 
										mensagem={inconsistenciaDetalhe.mensagem}/>
								}
							)
						}
				    </tbody>
				</table>
			</div>
		)
	}
}

export default InconsistenciaList