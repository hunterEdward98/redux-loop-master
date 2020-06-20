import React, { Component } from 'react';
import axios from 'axios';
import Form from '../Form/Form'
import Form2 from '../Form/Form2'
import Form3 from '../Form/Form3.js'
import Form4 from '../Form/Form4.js'
import Form5 from '../Form/Form5.js'
import Form6 from '../Form/Form6.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <div className='content'>
            <Switch>
              <Route exact path='/' component={Form} />
              <Route exact path='/form2' component={Form2} />
              <Route exact path='/form3' component={Form3} />
              <Route exact path='/form4' component={Form4} />
              <Route exact path='/form5' component={Form5} />
              <Route exact path='/form6' component={Form6} />
            </Switch>
          </div>
          <br />
        </div >
      </Router>
    );
  }
}
export default App;
