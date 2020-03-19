import React from 'react';
import { Route} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/ContactForm';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path="/" component={Home} />
      <Route path="/Skills" component={Skills} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Contact" component={Contact} />
    </div>
  );
}

export default App;
