import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Cabecalho from './Cabecalho'
import Inicio from './Inicio'
import Rodape from './Rodape'
import Inconsistencias from './inconsistencia/Inconsistencias'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Cabecalho />
                        <Route exact path='/' component={Inicio} />
                        <Route exact path='/inconsistencias' component={Inconsistencias} />
                        <Rodape />
                    </div>
                </Router>
            </div>
        )
    }
}

export default App
