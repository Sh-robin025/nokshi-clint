import Home from './Components/Home'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from './Components/Admin';

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/admin">
          <Admin/>
        </Route>
        <Route path="*">
          <h5>Page not found,404 !</h5>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
