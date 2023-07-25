import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./Home"
import NavBar from "./NavBar"
import MonthsList from "./MonthsList"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/months">
        <MonthsList />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
