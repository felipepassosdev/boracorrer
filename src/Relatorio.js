import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Relatorio extends Component {
    render() {
        return (
            <div className="Container">
                <div className="row">
                    <div className="col">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col" className="text-danger">Primeiro</th>
                                    <th scope="col" className="text-primary">Segundo</th>
                                    <th scope="col" className="text-dark">Usuário</th>
                                    <th scope="col" className="text-info">Idade</th>
                                    <th scope="col" className="text-success">Atividade</th>
                                    <th scope="col" className="text-success">Lugares</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>18</td>
                                    <td>Corrida</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>17</td>
                                    <td>Bicicleta</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>22</td>
                                    <td>Corrida</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>28</td>
                                    <td>Corrida</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>15</td>
                                    <td>Corrida</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>17</td>
                                    <td>Caminhada</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>18</td>
                                    <td>Corrida</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>18</td>
                                    <td>Corrida</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="/cadastrar" className="navbar-brand text-white">
                            <button className="btn btn-primary" type="submit">Exportar para excel</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Relatorio;