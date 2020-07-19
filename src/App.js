import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import NavComponent from './components/NavComponent';

export default function App() {
  return (
    <NavComponent/>
  );
}



