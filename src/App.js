import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { About } from "./Components/About";
import { AddProducts } from "./Components/AddProducts";
import { Cart } from "./Components/Cart";
import { NotFound } from "./Components/NotFound";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/aboutus" component={About} />
        <Route path="/add-products" component={AddProducts} />
        <Route path="/cart" component={Cart} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
