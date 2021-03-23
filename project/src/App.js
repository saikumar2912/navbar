import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SKILLS from './pages/skills';
import POST from './pages/post';
import contactus from './pages/contactus';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/home'  component={Home} />
        <Route path='/skills' component={SKILLS} />
        <Route path='/post' component={POST} />
        <Route path='/contactus' component={contactus} />
      </Switch>
    </Router>
  );
}

export default App;