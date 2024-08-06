import './App.css';
import Hero from './Page/Hero';
import Navbar from './components/Navbar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  const title = "Titulo ejemplo"; 

  return (
    <>
      <Navbar />
      <Hero />
      <ItemListContainer title={title} />
      <ItemListContainer otroTitle={"Titulo por defecto"} />
    </>
  );
}

export default App;
