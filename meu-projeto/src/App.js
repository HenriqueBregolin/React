import logo from './logo.svg';
import './App.css';
import Somar from './components/n1';
import N2 from './components/n2'
import SayMyName from './components/SayMyName';
import Pessoas from './components/Pessoas'
import NewPessoas from './components/NewPessoas';

function App() {
  return (
    <div className="App">
       <h1>Meu titulo</h1>
       <Somar />
       <N2 />
       <SayMyName nome="Jão" />
       <SayMyName nome="Pedro" />
       <SayMyName nome="Gabirle" />
       <Pessoas nome="Henrique" idade="26" salario="10.000" sexo="M" img="https://unsplash.com/photos/T-YJIxrtO0I" />
       <NewPessoas nome="jão" idade="20" salario="5" sexo="F" cor="rosa" />
    </div>
     
  );
}

export default App;
