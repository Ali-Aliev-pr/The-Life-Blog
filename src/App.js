import './App.css';
import Home from './home/Home';
import Navbar from './navbar/Navbar';
import Newblog from './Newblog/Newblog';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/create" component={Newblog}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
