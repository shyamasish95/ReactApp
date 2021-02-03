import logo from './logo.svg';
import './App.css';
import Todos from './Components/todos';
import Home from './Components/Pages/Home';
import Navbar from './Components/Layout/Navbar';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import NotFound from './Components/Pages/NotFound';
import AddUser from './Components/Pages/AddUser';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/users/add" component={AddUser}></Route>
        <Route component={NotFound}></Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
