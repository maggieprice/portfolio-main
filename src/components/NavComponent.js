import React from 'react';
import { Nav, NavItem, NavLink } from "shards-react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import ContactForm from './ContactForm';
// import { Router } from 'react-router-dom';

export default function NavComponent() {
  return (
    <Router>
    <Nav tabs>
      <NavItem>
        <NavLink active href="/" >
          Home
        </NavLink>
        {/* <Home/> */}
      </NavItem>
      <NavItem>
        <NavLink href="/skills">
          Skills
        </NavLink>
        {/* <Skills/> */}
      </NavItem>
      <NavItem>
        <NavLink href="/projects">Projects</NavLink>
        {/* <Projects/> */}
      </NavItem>
      <NavItem>
        <NavLink href="/contact">
          Contact
        </NavLink>
        {/* <ContactForm/> */}
      </NavItem>
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

    
    </Nav>
    </Router>
  );
}
// import { Nav, Dropdown } from 'rsuite';
// import {NavLink} from 'react-router-dom'

// export default function Nav() {
//     return (
//         <Nav>
//             <NavLink to="/" exact={true} className={'links'}>Home</NavLink>
//             <NavLink to="/skills"  className={'links'}>Skills</NavLink>
//             <NavLink to="/projects" className={'links'}>Projects</NavLink>
//             <NavLink to="/contact" className={'links'}>Contact</NavLink>
//         </Nav>
//     )
// }


// const styles = {
//     marginBottom: 50
//   };
  
//   const CustomNav = ({ active, onSelect, ...props }) => {
//     return (
//       <Nav {...props} activeKey={active} onSelect={onSelect} style={styles}>
//         <Nav.Item eventKey="home" icon={<Icon icon="home" />}>
//           Home
//         </Nav.Item>
//         {/* <Nav.Item eventKey="home">Home</Nav.Item> */}
//         <Nav.Item eventKey="skills">Skills</Nav.Item>
//         <Nav.Item eventKey="projects">Projects</Nav.Item>
//         <Nav.Item eventKey="contact">Contact</Nav.Item>
//       </Nav>
//     );
//   };
  
//   class Nav extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//         active: 'home'
//       };
//       this.handleSelect = this.handleSelect.bind(this);
//     }
//     handleSelect(activeKey) {
//       this.setState({ active: activeKey });
//     }
//     render() {
//       const { active } = this.state;
//       return (
//         <div>
//           <CustomNav active={active} onSelect={this.handleSelect} />
//           <CustomNav appearance="tabs" active={active} onSelect={this.handleSelect} />
//           <CustomNav appearance="tabs" reversed active={active} onSelect={this.handleSelect} />
//           <CustomNav appearance="subtle" active={active} onSelect={this.handleSelect} />
//           <CustomNav appearance="subtle" reversed active={active} onSelect={this.handleSelect} />
//         </div>
//       );
//     }
//   }
  
//  export default Nav;
