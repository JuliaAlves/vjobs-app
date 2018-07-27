import React, { Component } from 'react';
import './App.css';

import Header from './components/navigation/Header/Header.js';
import List from './components/jobs/List/List.js';
import Main from './components/navigation/Main/Main.js';
import About from './components/About/About.js'
import More from './components/jobs/More/More.js'

import {Switch, Route} from 'react-router-dom';
import Form from './components/jobs/Form/Form';
import Login from './components/Login/Login'
import axios from 'axios';

class App extends Component {
  state = {
    loggedUser: JSON.parse(window.localStorage.getItem('user')) || null
  }

  logInHandler= (emVal, senVal) =>{
      axios.post('/login', {email: emVal, senha: senVal})
      .then(res => {
        window.localStorage.setItem('user', JSON.stringify(res.data.user))
        window.localStorage.setItem('token', res.data.token)
        this.setState({loggedUser: res.data.user})
      })
      .catch(error => {console.log(error); alert('Login inválido')})
  }

  logoutHandker  = () =>{
    window.localStorage.clear()
    this.setState({loggedUser: null})
  }

  getLoggedUser(){
    return this.state.loggedUser;
  }

  render() {
    if(this.getLoggedUser()){
      return (<div>
        <Header logout={this.logoutHandker} username={this.state.loggedUser.name} />
        <Main>
          <Switch>
            <Route exact path='/' component={List}></Route>
            <Route exact path='/vaga/:id' component={More}></Route>
            <Route exact path='/edit/:id' component={Form}></Route>
            <Route path='/vagas' component={List}></Route>
            <Route path='/sobre' component={About}></Route>
          </Switch>
        </Main> 
      </div>)
    }
    
    return (<Login login={this.logInHandler} />)
    
  }
}

export default App;
