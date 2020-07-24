import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Students from "./components/Students";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/students" exact component={Students} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
