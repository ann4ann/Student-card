import React from "react";
import { Route, Switch } from "react-router";
import AddCard from "./layouts/addCard";
import StudentCard from "./layouts/studentCard";

function App() {
  return (
    <Switch>
      <Route path="/add" component={AddCard} />
      <Route path="/" component={StudentCard} />
    </Switch>
  );
}

export default App;
