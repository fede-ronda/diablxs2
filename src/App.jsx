import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <>

      <NavBar/>

      <div className="App">
        <h1>¡Bienvenidos!</h1>
        <ItemListContainer greeting="se vienen cositas..." />
      </div>

    </>

  );
}

export default App;
