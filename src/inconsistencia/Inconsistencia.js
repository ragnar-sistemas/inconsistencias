import React, { Component } from 'react'

import lupa from '../images/lupa.png'

class Inconsistencia extends Component {
	render() {
		return (
			<tr>
				<td>
					{this.props.id}
				</td>
				<td>
					{this.props.mensagem}
				</td>
				<td>
					<img src={lupa} className="mx-auto d-block" alt="logo" width="20" height="20"/>
				</td>
			</tr>
		)
	}

}

export default Inconsistencia