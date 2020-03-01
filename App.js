import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Route exact path="/" component={Home} />
      <Route path="/Skills" component={Skills} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
   
    </div>

    </Router>
  );
}

export default App;
