import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./Home"
import NavBar from "./NavBar"
import MonthsPage from "./MonthsPage"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/months">
        <MonthsPage />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
