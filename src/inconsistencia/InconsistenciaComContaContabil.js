import React, { Component } from 'react'

import ContaContabil from './ContaContabil'
import Inconsistencia from './Inconsistencia'

class InconsistenciaComContaContabil extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      inconsistenciaDetalhe:{}
	    }
	  }

	render() {
		return (
			<div>
				<td>
					<Inconsistencia
						id={this.inconsistenciaDetalhe.id} 
						mensagem={this.inconsistenciaDetalhe.mensagem}/>
				</td>
				<td>
					<ContaContabil />
				</td>
			</div>
		)
	}

}

export default InconsistenciaComContaContabil