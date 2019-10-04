import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Menu from './Menu';
import Relatorio from './Relatorio';
import Dashboard from './Dashboard';
import { Switch, Route } from 'react-router-dom';
import Perfil from './Perfil';

function App() {
  return (
    <div>
       <Navbar />
      <div className="row">
        <div className="col-md-2">
        <Menu />
        </div>
        <div className="col-md-10">
        <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/relatorio" component={Relatorio} />
        <Route path="/perfil" component={Perfil} />
        </ Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
