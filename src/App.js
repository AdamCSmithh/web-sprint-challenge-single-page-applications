import "./App.css"
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import PizzaOrder from "./Components/PizzaOrder";



const App = () => {
  return (
    <div className="app">
      <div className="header"><h1>Lambda Eats</h1></div>
      <nav>
        <Link to="/"><button id="home-button">Home</button></Link>
      </nav>
     
  <Switch>
      <Route path="/pizza" component={PizzaOrder} />
      <Route path="/" component={Home} />
  </Switch>

    </div>
  );
};
export default App;