import './App.css';
import MainCard from './components/main-card';
import Authentication from './components/authentication';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Myissue from './components/my-issue';

function App() {
  return (
    <div className="App">
        <Router>
          <MainCard>
            <Switch>
              <Route path="/" exact component={Authentication}/>
              <Route path="/dashboard" exact component={Dashboard}/>
              <Route path="/myissues" exact component={Myissue}/>
            </Switch>
          </MainCard>
        </Router>
    </div>
  );
}

export default App;