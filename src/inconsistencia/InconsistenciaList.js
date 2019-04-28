import React, { Component } from 'react'
import logo from '../images/lupa.png';
import InconsistenciaData from '../dados/inconsistencias.json'

class InconsistenciaList extends Component {

	render(){
		return (
			<div className="container">
				<h2>Inconsitencias Para Geração de Lançamentos</h2>
				<table className="table table-condensed">
					<thead>
				      <tr>
				        <th>Inconsitência</th>
				      </tr>
				    </thead>
				    <tbody>
				    	{InconsistenciaData.map((inconsistenciaDetalhe, index) => {
							return <tr>
								<td>
									{inconsistenciaDetalhe.mensagem}
								</td>
								<td>
									<img src={logo} className="img" alt="logo" width="20" height="20"/>
								</td>
							</tr>
							})
						}
				    </tbody>

				</table>
			</div>
		)
	}

}

export default InconsistenciaList