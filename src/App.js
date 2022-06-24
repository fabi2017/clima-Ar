import "./estilos/App.css";
import NavBar from './componentes/NavBar';
import PanelClima from './componentes/PanelClima';

function App() {
  return (
    <div className="App">
      <header >        
        <NavBar/>        
      </header>
      <PanelClima/>
    </div>
  );
}

export default App;
