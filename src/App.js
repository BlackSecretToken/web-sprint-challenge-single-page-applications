import React from "react";
import { Route, Switch, Link } from 'react-router-dom';
import Header from './components/Header';
import "./App.css";

// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch> */}
    </div>
  );
}
export default App;