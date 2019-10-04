import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <Link to="/dashboard" className="nav-link text-dark"><h5>Dashboard</h5></Link>
                        <Link to="/relatorio" className="nav-link text-dark"><h5>Relatório</h5></Link>
                        <Link to="/perfil" className="nav-link text-dark"><h5>Perfil</h5></Link>
                        {/* <Link to="/mensagens" className="nav-link text-dark"><h5>Mensagens</h5></Link>
                        <Link to="/configuracoes" className="nav-link text-dark"><h5>Configuracoes</h5></Link> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;