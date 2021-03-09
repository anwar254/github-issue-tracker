import './App.css';
import MainCard from './components/main-card';
import Authentication from './components/authentication';

function App() {
  return (
    <div className="App">
      <MainCard>
        <Authentication />
      </MainCard>
    </div>
  );
}

export default App;
