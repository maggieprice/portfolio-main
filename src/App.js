import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
// import Nav from './components/Nav';

// function App() {
//   return (
//     <div className="App">
//       <Nav/>
//       <Route exact path="/" component={Home} />
//       <Route path="/Skills" component={Skills} />
//       <Route path="/Projects" component={Projects} />
//       <Route path="/Contact" component={ContactForm} />
//     </div>
//   );
// }

// export default App;

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <ContactForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



