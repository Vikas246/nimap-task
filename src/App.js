
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Tasks from './components/Tasks';
import User from './components/User';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="App">
          <NavbarComp />
        </div>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/user" component={User} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
