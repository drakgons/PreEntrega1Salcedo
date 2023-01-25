// import logo from './logo.svg';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Food from './components/Food';
import Hero from './components/Hero';

function App() {
  return (
    <>
    <NavBar/>
    {/* <Food /> */}
    <ItemListContainer greeting="Lista de poductos"/>
    {/* <Hero title="Batman Store"/> */}
    </>
  );
}

export default App;
