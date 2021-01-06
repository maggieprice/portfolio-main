import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactForm from "./ContactForm";

export default function NavComponent() {
  return (
    <Router>
      <div className="navigation">
        <Nav tabs>
          <NavItem className="navigation1">
            <NavLink className="navigation" href="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem className="navigation1">
            <NavLink NavLink className="navigation" href="/skills">
              Skills
            </NavLink>
          </NavItem>
          <NavItem className="navigation1">
            <NavLink NavLink className="navigation" href="/projects">
              Projects
            </NavLink>
          </NavItem>
          <NavItem className="navigation1">
            <NavLink className="navigation" href="/contact">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </div>
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
    </Router>
  );
}
