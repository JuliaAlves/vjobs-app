import React, { Component } from 'react';
import './App.css';

import Header from './components/navigation/Header/Header.js';
import List from './components/jobs/List/List.js';
import Main from './components/navigation/Main/Main.js';
import About from './components/About/About.js'
import More from './components/jobs/More/More.js'

import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main>
          <Switch>
            <Route exact path='/' component={List}></Route>
            <Route exact path='/vaga/:id' component={More}></Route>
            <Route path='/vagas' component={List}></Route>
            <Route path='/sobre' component={About}></Route>
          </Switch>
        </Main>
      </div>
    );
  }
}

export default App;
