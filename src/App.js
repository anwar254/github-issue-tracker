import './App.css';
import MainCard from './components/main-card';
import Authentication from './components/authentication';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <MainCard>
            <Route path="/" exact component={Authentication}/>
          </MainCard>
        </Router>
    </div>
  );
}

export default App;
